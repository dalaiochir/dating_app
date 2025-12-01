'use client';
export const dynamic = 'force-dynamic';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';

export default function FinalPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const ans = sp.get('ans');
  const ideasRaw = sp.get('ideas') || '';
  const chosenIndexes = ideasRaw ? ideasRaw.split(',').map(i => parseInt(i)) : [];

  const allIdeas = [
    'Coffee and walk in a park',
    'Visit a cozy cafe and chat',
    'Museum / gallery visit',
    'Picnic by the river',
    'Cook a meal together'
  ];

  useEffect(() => {
    if(ans === 'yes'){
      const duration = 1500;
      const end = Date.now() + duration;
      (function frame(){
        confetti({ particleCount: 6, spread: 55, origin: { y: 0.6 } });
        if(Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, [ans]);

  return (
    <main className={`min-h-screen flex justify-center items-center ${ans==='yes'? 'bg-gradient-to-br from-pink-400 via-red-300 to-yellow-200':'bg-gray-200'}`}>
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Таны хариу баталгаажлаа</h2>
        <p className="mb-6">Та: <strong>{ans==='yes'?'Тийм':'Үгүй'}</strong> гэж хариулсан.</p>
        <h3 className="text-xl font-semibold mb-2">Сонгосон санаанууд:</h3>
        <ul className="list-disc list-inside mb-6">
          {chosenIndexes.length>0 ? chosenIndexes.map(i=><li key={i}>{allIdeas[i]}</li>): <li>Сонголт хийгдээгүй</li>}
        </ul>
        <button onClick={()=>router.push('/')} className="px-4 py-3 bg-blue-600 text-white rounded-xl w-full">Дахин эхлэх</button>
      </div>
    </main>
  );
}
