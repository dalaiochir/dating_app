'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PlanPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const answer = sp.get('answer') || 'none';

  const ideas = [
    'Coffee and walk in a park',
    'Visit a cozy cafe and chat',
    'Museum / gallery visit',
    'Picnic by the river',
    'Cook a meal together'
  ];

  const [chosen, setChosen] = useState([]);
  const toggle = (i) =>
    setChosen(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  const goFinal = (ans) => {
    router.push(`/final?ans=${ans}&ideas=${chosen.join(',')}`);
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 via-red-200 to-yellow-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Болзооны санаанууд</h2>
        <ul className="space-y-3 mb-6">
          {ideas.map((it, i) => (
            <li key={i} className="flex justify-between p-3 border rounded-xl">
              <span>{it}</span>
              <input type="checkbox" checked={chosen.includes(i)} onChange={() => toggle(i)} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-3">
          <button onClick={() => goFinal('no')} className="px-5 py-2 border rounded-xl">Үгүй</button>
          <button onClick={() => goFinal('yes')} className="px-5 py-2 bg-blue-600 text-white rounded-xl">Тийм</button>
        </div>
      </div>
    </main>
  );
}
