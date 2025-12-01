'use client'; // Client component

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalPage() {
  const searchParams = useSearchParams();
  const [answer, setAnswer] = useState(null);

  const handleAnswer = (ans) => {
    setAnswer(ans);
    if (ans === 'yes') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-4">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Чи надтай болзоонд явхыг зөвшөөрч байна уу?
      </motion.h1>

      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer('yes')}
          className={`px-6 py-3 rounded text-white font-semibold ${
            answer === 'yes' ? 'bg-green-500' : 'bg-green-400'
          }`}
        >
          YES
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAnswer('no')}
          className={`px-6 py-3 rounded text-white font-semibold ${
            answer === 'no' ? 'bg-red-500' : 'bg-red-400'
          }`}
        >
          NO
        </motion.button>
      </div>

      {answer && (
        <motion.div
          className="mt-8 text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Таны сонголт: {answer.toUpperCase()}
        </motion.div>
      )}
    </div>
  );
}
