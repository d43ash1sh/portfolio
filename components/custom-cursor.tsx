'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Faster spring config for more responsive movement
  const springConfig = { damping: 15, stiffness: 300, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
      setMousePosition({ x: clientX, y: clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('.hover-glow') !== null ||
        target.closest('.card-hover') !== null
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);
    window.addEventListener('mouseout', () => setIsHovering(false));

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
      window.removeEventListener('mouseout', () => setIsHovering(false));
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isHovering ? 'w-12 h-12 opacity-50' : 'w-3 h-3'
          }`}
        />
      </motion.div>
      
      {/* Glow effect */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: '80px',
          height: '80px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
        }}
      />
    </>
  );
};

export default CustomCursor;