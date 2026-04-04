"use client";

import { useEffect, useRef, useState } from "react";
import { useVoiceEngine } from "./hooks/useVoiceEngine";
import MicButton from "./MicButton";
import MessageList from "./MessageList";
import axios from "axios";

export default function AIWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [languageSelected, setLanguageSelected] = useState(false);

    const sessionIdRef = useRef(null);

    const API_BASE =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

    const {
        messages,
        status,
        setMessages,
        startRecording,
        playStreamingAudio,
        stopAll,
        shouldListenRef,
    } = useVoiceEngine(API_BASE, sessionIdRef);

    // ===============================
    // SESSION INIT
    // ===============================
    useEffect(() => {
        let session = localStorage.getItem("ai_session");

        if (!session) {
            session =
                (typeof crypto !== "undefined" && crypto.randomUUID)
                    ? crypto.randomUUID()
                    : "session-" +
                    Math.random().toString(36).substring(2) +
                    Date.now();

            localStorage.setItem("ai_session", session);
        }

        sessionIdRef.current = session;
    }, []);

    // ===============================
    // 🌐 SET LANGUAGE
    // ===============================
    const selectLanguage = async (lang) => {
        try {
            console.log("CLICK WORKING:", lang);

            const res = await axios.post(`${API_BASE}/api/set-language`, {
                sessionId: sessionIdRef.current,
                language: lang,
            });

            console.log("Language set:", res.data);

            setLanguageSelected(true);

            // Start conversation
            const askRes = await axios.post(`${API_BASE}/api/ask`, {
                query: "__start__",
                sessionId: sessionIdRef.current,
            });

            const aiText = askRes.data.text;

            setMessages([{ role: "bot", text: aiText }]);
            playStreamingAudio(aiText);

            shouldListenRef.current = true;
            startRecording();

        } catch (err) {
            console.error("❌ Language error:", err);
            alert("Language selection failed");
        }
    };

    // ===============================
    // SEND MESSAGE
    // ===============================
    const sendMessage = async () => {
        if (!input.trim()) return;

        stopAll();

        const msg = input;
        setInput("");

        setMessages((prev) => [
            ...prev,
            { role: "user", text: msg },
        ]);

        const res = await axios.post(`${API_BASE}/api/ask`, {
            query: msg,
            sessionId: sessionIdRef.current,
        });

        const aiText = res.data.text;

        setMessages((prev) => [
            ...prev,
            { role: "bot", text: aiText },
        ]);

        playStreamingAudio(aiText);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => {
                    const next = !open;
                    setOpen(next);

                    if (!next) {
                        shouldListenRef.current = false;
                        stopAll();
                        setLanguageSelected(false);
                    }
                }}
                className="fixed bottom-24 right-5 bg-black text-white px-5 py-3 rounded-full shadow-lg z-[9999] cursor-pointer"
            >
                💬
            </button>

            {/* Chat Box */}
            {open && (
                <div className="fixed bottom-40 right-5 w-96 h-[550px] bg-white rounded-2xl flex flex-col shadow-2xl overflow-hidden z-[9999] pointer-events-auto">

                    {/* Header */}
                    <div className="p-4 bg-black text-white flex justify-between items-center shrink-0">
                        <span className="font-semibold">MAITRI AI</span>
                        <MicButton status={status} onClick={stopAll} />
                    </div>

                    {/* LANGUAGE SELECT */}
                    {!languageSelected ? (
                        <div className="flex flex-col items-center justify-center flex-1 gap-4 p-6 pointer-events-auto">

                            <p className="text-lg font-semibold">
                                Select Language
                            </p>

                            <button
                                onClick={() => selectLanguage("en")}
                                className="w-full bg-black text-white py-3 rounded-xl cursor-pointer z-[9999]"
                            >
                                English
                            </button>

                            <button
                                onClick={() => selectLanguage("mr")}
                                className="w-full border border-black py-3 rounded-xl cursor-pointer z-[9999]"
                            >
                                मराठी
                            </button>

                        </div>
                    ) : (
                        <>
                            {/* Messages */}
                            <MessageList messages={messages} />

                            {/* Input */}
                            <div className="p-3 flex gap-2 border-t shrink-0 bg-white">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 border px-3 py-2 rounded outline-none"
                                    placeholder="Type a message..."
                                />
                                <button
                                    onClick={sendMessage}
                                    className="bg-black text-white px-4 rounded cursor-pointer"
                                >
                                    ➤
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}