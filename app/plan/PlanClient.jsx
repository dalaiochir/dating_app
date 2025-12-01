'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PlanClient() {
  const searchParams = useSearchParams();
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const dt = searchParams.get('datetime') || '2025-12-25 19:00';
    setDateTime(dt);
  }, [searchParams]);

  return (
    <div>
      <p className="text-xl">Болзооны цаг: {dateTime}</p>
      <ol className="mt-6 list-decimal list-inside text-lg space-y-2">
        <li>Цэцэг авах</li>
        <li>Ресторан захиалах</li>
        <li>Сюрприз бэлэг бэлдэх</li>
        <li>Хамтдаа кино үзэх</li>
      </ol>
    </div>
  );
}
