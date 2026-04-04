export default function MicButton({ status, onClick }) {
    const style =
        status === "listening"
            ? "bg-red-500 animate-pulse scale-110"
            : status === "speaking"
                ? "bg-green-500"
                : "bg-gray-300";

    return (
        <button
            onClick={onClick}
            className={`w-11 h-11 rounded-full text-white ${style}`}
        >
            🎤
        </button>
    );
}