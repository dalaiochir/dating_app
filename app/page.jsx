'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [secretCount, setSecretCount] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [emojiRain, setEmojiRain] = useState([]);

  const images = [
    '/images/download (1).jpg',
    '/images/download (2).jpg',
    '/images/download (3).jpg'
  ];

  const nextImage = () => {
    if (index < images.length - 1) setIndex(index + 1);
    else router.push('/plan');
  };

  const secretClick = (e) => {
    setSecretCount(prev => prev + 1);

    // Floating heart at click
    const x = e.clientX;
    const y = e.clientY;
    setHearts([...hearts, { id: Date.now(), x, y }]);

    if(secretCount + 1 >= 5) {
      router.push('/surprise');
    }
  };

  // Emoji rain
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * window.innerWidth;
      const emoji = ['💖','💕','😍','🌹','💌'][Math.floor(Math.random()*5)];
      setEmojiRain(prev => [...prev, { id, left, emoji }]);

      // Remove after 5 seconds
      setTimeout(() => {
        setEmojiRain(prev => prev.filter(e => e.id !== id));
      }, 5000);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-red-100 to-yellow-100 p-6 relative overflow-hidden">
      
      {/* Emoji rain in background */}
      <AnimatePresence>
        {emojiRain.map(({ id, left, emoji }) => (
          <motion.div
            key={id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: window.innerHeight + 50, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: "linear" }}
            style={{ position: 'absolute', left, fontSize: '1.5rem', pointerEvents: 'none' }}
          >
            {emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main content */}
      <img src={images[index]} alt="Memory" className="w-3/4 rounded-2xl shadow-xl mb-6"/>
      <button onClick={nextImage} className="px-6 py-3 bg-red-500 text-white rounded-xl mb-4">Next</button>

      {/* Secret interactive area */}
      <div 
        onClick={secretClick} 
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full cursor-pointer flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity"
      >
        💌
      </div>

      {/* Floating hearts from clicks */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 0, y: -100, scale: 1.5 }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', left: heart.x - 12, top: heart.y - 12, pointerEvents: 'none' }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

    </main>
  );
}
