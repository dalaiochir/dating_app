'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function FinalPage() {
  const searchParams = useSearchParams();
  const [agree, setAgree] = useState(null);

  useEffect(() => {
    if (agree === true) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [agree]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-pink-100">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Чи надтай болзоонд явхыг зөвшөөрч байна уу?
      </motion.h1>

      <div className="flex gap-6">
        <button
          onClick={() => setAgree(true)}
          className={`px-6 py-3 rounded-full font-bold ${
            agree === true ? 'bg-green-400 text-white' : 'bg-white text-green-500'
          } shadow-lg hover:scale-105 transition-transform`}
        >
          YES
        </button>
        <button
          onClick={() => setAgree(false)}
          className={`px-6 py-3 rounded-full font-bold ${
            agree === false ? 'bg-red-400 text-white' : 'bg-white text-red-500'
          } shadow-lg hover:scale-105 transition-transform`}
        >
          NO
        </button>
      </div>

      {agree !== null && (
        <motion.p
          className="mt-6 text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {agree ? 'Баяр хүргэе! 🎉 Болзоонд явна!' : 'Өө, дараа үзнэ ээ 😢'}
        </motion.p>
      )}
    </div>
  );
}
