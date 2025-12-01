'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PlanPage() {
  const searchParams = useSearchParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const planType = searchParams.get('type') || 'romantic';
    setActivities(
      planType === 'romantic'
        ? ['Цэцэг худалдаж авах', 'Хоол хийх', 'Кино үзэх', 'Нүүр номон дээр хайртай үг бичих']
        : ['Coffee shop-д очих', 'Парканд алхах', 'Ном унших']
    );
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Болзооны төлөвлөгөө
      </motion.h1>

      <ul className="space-y-4 text-lg">
        {activities.map((act, i) => (
          <motion.li
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-3 rounded shadow"
          >
            {act}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
