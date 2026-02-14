"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);

  const messages = [
    "",
    "Are you sure????? 🥺",
    "Think againnnnnn 💭",
    "My heart is breakingggggg 💔",
    "Please say yesssssss 🥹",
    "You are my Valentine ❤️",
  ];

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setYesScale((prev) => prev + 0.25);
    setNoScale((prev) => prev - 0.25);
  };

  const handleYesClick = () => {
    setNoScale((prev) => Math.max(prev - 0.3, 0.4));
    alert(
      "YAYYYYYY!!! 💖 I knew you'd say YES! Happy Valentine’s Day Babyyyyyyy 😘",
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-pink-100 to-rose-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-600">
        Will you be my Forever Valentine ? 💘
      </h1>

      {/* Cartoon Love GIF with Roses */}
      <video
        src="https://media1.giphy.com/media/v1.Y2lkPTQyMzA0NmQwODl4djZ5NHhjYmJhdXE3YzRuZHhzcDYxMGt5bm5lMWl5Y3Z2YzBybCZlcD12MV9naWZzX2dpZklkJmN0PWc/KmxmoHUGPDjfQXqGgv/200.mp4"
        autoPlay
        loop
        muted
        className="w-72 h-72 rounded-2xl shadow-xl object-cover"
      />

      {noCount >= 1 && (
        <p className="text-lg text-rose-700 min-h-[28px]">
          {messages[Math.min(noCount, messages.length - 1)]}
        </p>
      )}

      <div className="flex gap-6 mt-4">
        <button
          onClick={handleYesClick}
          style={{
            transform: noCount === 4 ? "scale(1)" : `scale(${yesScale})`,
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-transform duration-300 z-10"
        >
          YES 💖
        </button>
        {noCount === 4 && (
          <button
            onClick={handleYesClick}
            style={{
              transform: noCount === 4 ? "scale(1)" : `scale(${yesScale})`,
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-transform duration-300 z-10"
          >
            YES 💖
          </button>
        )}
        {noCount != 4 && (
          <button
            onClick={handleNoClick}
            style={{ transform: `scale(${noScale})` }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl transition-transform duration-300"
          >
            NO 💔
          </button>
        )}
      </div>
    </main>
  );
}
