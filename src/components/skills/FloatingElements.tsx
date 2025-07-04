
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Heavily optimized floating elements
  const floatingElements = useMemo(() => 
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 1,
    })), []
  );

  return (
    <>
      {/* Ultra-optimized Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              willChange: 'transform',
              transform: 'translateZ(0)',
              contain: 'layout style paint'
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(element.id) * 10, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
              type: "tween",
            }}
          />
        ))}
      </div>

      {/* Optimized Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" // Reduced size and opacity
          style={{ willChange: 'transform, opacity' }}
          animate={{
            scale: [1, 1.05, 1], // Reduced scale change
            opacity: [0.2, 0.3, 0.2], // Reduced opacity
          }}
          transition={{
            duration: 8, // Reduced from 12
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl" // Reduced size and opacity
          style={{ willChange: 'transform, opacity' }}
          animate={{
            scale: [1.05, 1, 1.05], // Reduced scale change
            opacity: [0.3, 0.15, 0.3], // Reduced opacity
          }}
          transition={{
            duration: 10, // Reduced from 15
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
