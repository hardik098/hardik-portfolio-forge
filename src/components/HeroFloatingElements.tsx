
import React from 'react';
import { motion } from 'framer-motion';

const HeroFloatingElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 border border-emerald-500/30 rounded-lg"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-16 h-16 border border-cyan-500/30 rounded-full"
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </>
  );
};

export default HeroFloatingElements;
