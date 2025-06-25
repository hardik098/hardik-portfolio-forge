
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Reduced floating elements for better performance
  const floatingElements = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({ // Reduced from 6 to 4
      id: i,
      size: Math.random() * 2 + 1.5, // Slightly smaller
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 6 + 8, // Reduced duration for snappier feel
      delay: Math.random() * 2, // Reduced delay
    })), []
  );

  return (
    <>
      {/* Optimized Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-15" // Reduced opacity from 20 to 15
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -30, 0], // Reduced movement from -50 to -30
              x: [0, Math.sin(element.id) * 15, 0], // Reduced from 20 to 15
              opacity: [0.1, 0.3, 0.1], // Reduced peak opacity
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut", // Better easing function
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
