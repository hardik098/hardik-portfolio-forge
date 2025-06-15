
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Only 2 elements, small and with subtle opacity animation
  const floatingElements = [
    { id: 1, size: 1.5, x: 30, y: 15, duration: 9, delay: 0 },
    { id: 2, size: 2, x: 70, y: 75, duration: 10, delay: 1.2 },
  ];

  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: 0.14,
              filter: "blur(0.5px)"
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.16, 0.1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Only one static gradient orb per corner for ultra-light effect */}
      <div className="absolute top-0 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
    </>
  );
};
export default FloatingElements;
