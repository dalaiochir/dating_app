'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function HomePage() {
  const [agree, setAgree] = useState(null);

  useEffect(() => {
    if (agree === true) {
      confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
    }
  }, [agree]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-100 p-6">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Миний Сайхан Болзоо
      </motion.h1>

      <p className="text-xl mb-6 text-center">
        Энэ бол зөвхөн чиний нууцлан орох романтик сайтад урьсан урилга юм 😘
      </p>

      <motion.button
        onClick={() => setAgree(true)}
        className="px-8 py-4 mb-4 rounded-full bg-pink-400 text-white font-bold shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Би зөвшөөрч байна ❤️
      </motion.button>

      <motion.button
        onClick={() => setAgree(false)}
        className="px-8 py-4 rounded-full bg-gray-200 text-gray-800 font-bold shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Үгүй 😢
      </motion.button>

      {agree !== null && (
        <motion.p
          className="mt-8 text-2xl font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {agree
            ? 'Баяр хүргэе! 🎉 Болзоонд явна!'
            : 'Өө, дараа үзнэ ээ 😢'}
        </motion.p>
      )}
    </div>
  );
}
