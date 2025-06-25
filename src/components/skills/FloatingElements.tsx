
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Memoize floating elements to prevent recalculation on re-renders
  const floatingElements = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 4,
    })), []
  );

  return (
    <>
      {/* Optimized Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(element.id) * 20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
              type: "tween", // Use tween instead of spring for better performance
            }}
          />
        ))}
      </div>

      {/* Optimized Background Gradients with will-change */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"
          style={{ willChange: 'transform, opacity' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl"
          style={{ willChange: 'transform, opacity' }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
          }}
        />
      </div>
    </>
  );
};

export default FloatingElements;
