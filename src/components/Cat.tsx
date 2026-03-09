import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';

export function Cat() {
  const controls = useAnimation();
  const [facingRight, setFacingRight] = useState(true);
  const [dialog, setDialog] = useState('');
  const [isWalking, setIsWalking] = useState(false);
  const posRef = useRef({ x: 100, y: 100 });
  const isRunning = useRef(true);

  useEffect(() => {
    // FIX: React 18 Strict Mode unmounts and remounts components, preserving refs.
    // We must reset isRunning to true when the effect runs!
    isRunning.current = true;

    // Spawn in the middle of the current viewport
    const startX = window.scrollX + window.innerWidth / 2;
    const startY = window.scrollY + window.innerHeight / 2;
    
    posRef.current = { x: startX, y: startY };
    controls.set({ x: startX, y: startY, opacity: 1 });

    const walk = async () => {
      if (!isRunning.current) return;

      // 10% chance to do a random action
      if (Math.random() < 0.1) {
        setIsWalking(false);
        const actionType = Math.random() > 0.5 ? 'stretch' : 'jump';
        if (actionType === 'stretch') {
          await controls.start({ scaleX: 1.2, scaleY: 0.8, transition: { duration: 0.5 } });
          await controls.start({ scaleX: 1, scaleY: 1, transition: { duration: 0.5 } });
        } else {
          await controls.start({ y: posRef.current.y - 20, transition: { type: 'spring', stiffness: 300 } });
          await controls.start({ y: posRef.current.y, transition: { type: 'spring', stiffness: 300 } });
        }
        if (isRunning.current) setTimeout(walk, 1000);
        return;
      }

      const docWidth = document.documentElement.scrollWidth;
      const docHeight = document.documentElement.scrollHeight;

      // Pick a random direction and distance
      const angle = Math.random() * Math.PI * 2;
      const dist = 100 + Math.random() * 200;
      
      let targetX = posRef.current.x + Math.cos(angle) * dist;
      let targetY = posRef.current.y + Math.sin(angle) * dist;

      // Clamp to document boundaries so it doesn't walk off-screen
      targetX = Math.max(20, Math.min(docWidth - 40, targetX));
      targetY = Math.max(20, Math.min(docHeight - 40, targetY));

      setFacingRight(targetX > posRef.current.x);
      
      // Calculate duration based on distance to keep speed constant (30px per second - much slower)
      const actualDist = Math.sqrt(Math.pow(targetX - posRef.current.x, 2) + Math.pow(targetY - posRef.current.y, 2));
      const duration = Math.max(1, actualDist / 30); 

      posRef.current = { x: targetX, y: targetY };
      
      setIsWalking(true);
      
      // Wait for the animation to finish completely before starting the next one
      await controls.start({
        x: targetX,
        y: targetY,
        transition: { duration: duration, ease: "linear" }
      }).catch(() => {});
      
      setIsWalking(false);
      
      // Pause before next move
      if (isRunning.current) {
        setTimeout(walk, Math.random() * 1500 + 1000);
      }
    };

    const timeoutId = setTimeout(walk, 1000);

    return () => {
      isRunning.current = false;
      clearTimeout(timeoutId);
    };
  }, [controls]);

  const handleClick = () => {
    const meows = ['喵！', '喵？', '喵...', '喵~', '喵喵！', '喵喵？', '喵。'];
    setDialog(meows[Math.floor(Math.random() * meows.length)]);
    setTimeout(() => setDialog(''), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="absolute top-0 left-0 z-0"
      style={{ width: 40, height: 40 }}
    >
      {/* Dialog */}
      {dialog && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-2 py-1 rounded-lg text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-50 pointer-events-none"
        >
          {dialog}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b-2 border-r-2 border-black rotate-45" />
        </motion.div>
      )}

      {/* Cat SVG */}
      <motion.div
        initial={false}
        animate={{ scaleX: facingRight ? -1 : 1 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full cursor-pointer pointer-events-auto"
        onClick={handleClick}
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Group body, head, tail together so they never separate */}
          <motion.g
            initial={false}
            animate={isWalking ? { y: [0, -1, 0, -1, 0] } : { y: 0 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          >
            {/* Tail */}
            <motion.path
              initial={false}
              d="M30 24 Q 38 24 36 14"
              stroke="#1a1a1a"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              animate={isWalking ? { 
                d: ["M30 24 Q 38 24 36 14", "M30 24 Q 38 24 32 16", "M30 24 Q 38 24 36 14"] 
              } : {
                d: ["M30 24 Q 38 24 36 14", "M30 24 Q 36 24 34 16", "M30 24 Q 38 24 36 14"]
              }}
              transition={{ repeat: Infinity, duration: isWalking ? 0.6 : 2 }}
            />
            
            {/* Body */}
            <rect x="8" y="18" width="22" height="14" rx="7" fill="#1a1a1a" />
            
            {/* Head */}
            <circle cx="12" cy="16" r="8" fill="#1a1a1a" />
            {/* Ears */}
            <polygon points="6,11 10,4 14,11" fill="#1a1a1a" />
            <polygon points="12,11 16,4 20,11" fill="#1a1a1a" />
            {/* Eyes */}
            <circle cx="9" cy="15" r="1.5" fill="white" />
            <circle cx="15" cy="15" r="1.5" fill="white" />
          </motion.g>

          {/* Legs */}
          {/* Front Leg 1 */}
          <motion.rect x="10" y="30" width="3.5" height="6" rx="1.75" fill="#1a1a1a" 
            initial={false}
            animate={isWalking ? { 
              x: [-2, 0, 2, 0, -2],
              y: [0, -1.5, 0, 0, 0]
            } : { x: 0, y: 0 }} 
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
          />
          {/* Front Leg 2 */}
          <motion.rect x="14" y="30" width="3.5" height="6" rx="1.75" fill="#1a1a1a" 
            initial={false}
            animate={isWalking ? { 
              x: [2, 0, -2, 0, 2],
              y: [0, 0, 0, -1.5, 0]
            } : { x: 0, y: 0 }} 
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
          />
          {/* Back Leg 1 */}
          <motion.rect x="22" y="30" width="3.5" height="6" rx="1.75" fill="#1a1a1a" 
            initial={false}
            animate={isWalking ? { 
              x: [-2, 0, 2, 0, -2],
              y: [0, -1.5, 0, 0, 0]
            } : { x: 0, y: 0 }} 
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
          />
          {/* Back Leg 2 */}
          <motion.rect x="26" y="30" width="3.5" height="6" rx="1.75" fill="#1a1a1a" 
            initial={false}
            animate={isWalking ? { 
              x: [2, 0, -2, 0, 2],
              y: [0, 0, 0, -1.5, 0]
            } : { x: 0, y: 0 }} 
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
