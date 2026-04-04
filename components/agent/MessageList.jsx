import { useEffect, useRef, useState } from "react";

export default function MessageList({ messages }) {
    const containerRef = useRef(null);
    const endRef = useRef(null);
    const [isAtBottom, setIsAtBottom] = useState(true);

    // ===============================
    // 🔍 DETECT SCROLL POSITION
    // ===============================
    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;

        const threshold = 50;
        const atBottom =
            el.scrollHeight - el.scrollTop - el.clientHeight < threshold;

        setIsAtBottom(atBottom);
    };

    // ===============================
    // 🔄 AUTO SCROLL (SMOOTH + FAST)
    // ===============================
    useEffect(() => {
        if (isAtBottom) {
            endRef.current?.scrollIntoView({
                behavior: "auto", // ⚡ faster than smooth
            });
        }
    }, [messages, isAtBottom]);

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-3 bg-gray-50"
        >
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`px-3 py-2 rounded-xl text-sm max-w-[80%] transition-all duration-200 ease-out ${msg.role === "user"
                        ? "bg-black text-white ml-auto"
                        : "bg-white border shadow-sm"
                        }`}
                >
                    {/* ===============================
                        ✨ STREAMING TEXT EFFECT
                    =============================== */}
                    <span className="whitespace-pre-wrap">
                        {msg.text}
                    </span>

                    {/* 🔥 Typing cursor effect (last bot message) */}
                    {i === messages.length - 1 && msg.role === "bot" && (
                        <span className="inline-block ml-1 animate-pulse">▌</span>
                    )}
                </div>
            ))}

            <div ref={endRef} />
        </div>
    );
}