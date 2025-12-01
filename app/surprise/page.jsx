'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export default function SurprisePage() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-red-200 to-yellow-100 text-center p-6">
      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold mb-6 animate-bounce"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        😍 Surprise! 😍
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Та миний зүрхэнд хамгийн онцгой хүн байна 💖
      </motion.p>

      <motion.button
        className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
        onClick={() => router.push('/')}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Буцах
      </motion.button>
    </main>
  );
}
