'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Simple emoji rain component
function EmojiRain({ emojis, count = 30 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const style = {
          position: 'absolute',
          top: `${-Math.random() * 20}vh`,
          left: `${Math.random() * 100}vw`,
          fontSize: `${12 + Math.random() * 24}px`,
          animation: `fall ${5 + Math.random() * 5}s linear infinite`,
          pointerEvents: 'none',
        };
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        return (
          <span key={i} style={style}>
            {emoji}
          </span>
        );
      })}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [clicks, setClicks] = useState(0);

  const handleSecretClick = () => {
    setClicks((prev) => prev + 1);
    if (clicks + 1 >= 5) {
      router.push('/surprise'); // 5 clicks → secret page
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-100 overflow-hidden">
      {/* Emoji rain */}
      <EmojiRain emojis={['💖','🌸','🌹','✨','💕']} count={40} />

      {/* Main content */}
      <motion.h1
        className="text-5xl font-bold mb-6 cursor-pointer select-none z-10"
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
        onClick={handleSecretClick}
      >
        💌 Click me for a secret surprise!
      </motion.h1>
      <motion.p
        className="text-lg z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Click the heart multiple times and see the magic...
      </motion.p>
    </div>
  );
}
