'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export default function SurprisePage() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        🎉 Surprise! 🎉
      </motion.h1>
      <motion.p
        className="text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Та зөвхөн мэдээгүй байхдаа энэхүү хуудсанд хүрлээ!
      </motion.p>
    </div>
  );
}
