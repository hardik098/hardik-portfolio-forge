
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Reduced number and optimized floating elements
  const floatingElements = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 6 + 10,
      delay: Math.random() * 3,
    })), []
  );

  return (
    <>
      {/* Optimized Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden will-change-auto">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-15 will-change-transform"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(element.id) * 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      {/* Optimized Background Gradients */}
      <div className="absolute inset-0 will-change-auto">
        <motion.div
          className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/6 to-purple-500/6 rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/6 to-cyan-500/6 rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1.08, 1, 1.08],
            opacity: [0.4, 0.15, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </div>
    </>
  );
};

export default FloatingElements;
