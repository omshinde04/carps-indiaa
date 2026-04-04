import { useRef, useState } from "react";
import axios from "axios";

export const useVoiceEngine = (API_BASE, sessionIdRef) => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState("idle");

    const mediaRecorderRef = useRef(null);
    const streamRef = useRef(null);
    const audioChunksRef = useRef([]);

    const silenceTimerRef = useRef(null);
    const maxTimerRef = useRef(null);

    const currentAudioRef = useRef(null);

    // 🔥 FIXED QUEUE
    const audioQueueRef = useRef([]);
    const isPlayingRef = useRef(false);

    const shouldListenRef = useRef(false);
    const isProcessingRef = useRef(false);

    // ===============================
    // 🔊 PLAY NEXT
    // ===============================
    const playNext = () => {
        if (audioQueueRef.current.length === 0) {
            isPlayingRef.current = false;
            restartListening();
            return;
        }

        const base64Audio = audioQueueRef.current.shift();
        const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);

        currentAudioRef.current = audio;

        isPlayingRef.current = true;

        audio.onended = playNext;
        audio.onerror = playNext;

        audio.play().catch(() => playNext());
    };

    const addToQueue = (chunk) => {
        audioQueueRef.current.push(chunk);

        if (!isPlayingRef.current) {
            playNext();
        }
    };

    // ===============================
    // 🔊 STOP ALL (FIXED)
    // ===============================
    const stopAll = () => {
        isPlayingRef.current = false;
        audioQueueRef.current = [];

        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }

        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.stop();
        }

        clearTimeout(silenceTimerRef.current);
        clearTimeout(maxTimerRef.current);

        setStatus("idle");
    };

    // ===============================
    // 🔊 STREAM AUDIO (FIXED)
    // ===============================
    const playStreamingAudio = async (text) => {
        try {
            setStatus("speaking");

            const response = await fetch(`${API_BASE}/api/tts/stream`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const parts = buffer.split("\n");

                for (let i = 0; i < parts.length - 1; i++) {
                    try {
                        const chunk = JSON.parse(parts[i]);

                        if (chunk.audio) {
                            for (const audioChunk of chunk.audio) {
                                addToQueue(audioChunk);
                            }
                        }
                    } catch (e) { }
                }

                buffer = parts[parts.length - 1];
            }
        } catch (err) {
            console.log("Streaming error:", err);
        }
    };

    // ===============================
    // 🎤 START RECORDING (FIXED)
    // ===============================
    const startRecording = async () => {
        try {
            if (!shouldListenRef.current) return;
            if (mediaRecorderRef.current?.state === "recording") return;

            setStatus("listening");

            if (!streamRef.current) {
                streamRef.current =
                    await navigator.mediaDevices.getUserMedia({
                        audio: {
                            noiseSuppression: true,
                            echoCancellation: true,
                        },
                    });
            }

            const recorder = new MediaRecorder(streamRef.current);
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (e) => {
                if (e.data?.size > 0) {
                    audioChunksRef.current.push(e.data);
                }

                clearTimeout(silenceTimerRef.current);

                silenceTimerRef.current = setTimeout(() => {
                    if (recorder.state === "recording") recorder.stop();
                }, 700);
            };

            recorder.onstop = handleVoiceUpload;

            recorder.start(150);

            maxTimerRef.current = setTimeout(() => {
                if (recorder.state === "recording") recorder.stop();
            }, 6000);

        } catch (err) {
            console.log("Mic error:", err);
            setStatus("idle");
        }
    };

    // ===============================
    // 🎤 VOICE FLOW
    // ===============================
    const handleVoiceUpload = async () => {
        if (isProcessingRef.current) return;

        const blob = new Blob(audioChunksRef.current);

        if (blob.size < 2000) return restartListening();

        isProcessingRef.current = true;
        setStatus("thinking");

        const formData = new FormData();
        formData.append("audio", blob, "audio.webm");
        formData.append("sessionId", sessionIdRef.current);

        try {
            const res = await axios.post(`${API_BASE}/api/voice`, formData);

            const { userText, text } = res.data;

            if (!userText) return restartListening();

            setMessages((prev) => [
                ...prev,
                { role: "user", text: userText },
                { role: "bot", text },
            ]);

            playStreamingAudio(text);

        } catch (err) {
            console.log(err);
            restartListening();
        } finally {
            isProcessingRef.current = false;
        }
    };

    const restartListening = () => {
        setTimeout(() => {
            if (
                shouldListenRef.current &&
                !isProcessingRef.current &&
                !isPlayingRef.current
            ) {
                startRecording();
            }
        }, 200);
    };

    return {
        messages,
        status,
        setMessages,
        startRecording,
        playStreamingAudio,
        stopAll,
        shouldListenRef,
    };
};