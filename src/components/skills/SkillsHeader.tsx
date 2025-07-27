
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const SkillsHeader = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "tween" }} // Reduced from 0.6
      className="text-center mb-20"
    >
      {/* Ultra-optimized Floating Icon */}
      <motion.div
        className="inline-flex items-center justify-center mb-8"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          contain: 'layout style paint'
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          type: "tween",
        }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30" // Reduced opacity
            style={{ willChange: 'transform' }}
            animate={{
              scale: [1, 1.1, 1], // Reduced from 1.2
            }}
            transition={{
              duration: 3, // Reduced from 4
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween",
            }}
          />
          <div className="relative p-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="text-5xl md:text-7xl font-bold text-white mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, type: "tween" }} // Reduced duration
      >
        Technical{" "}
        <span className="relative">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mastery
          </span>
          <motion.div
            className="absolute -top-2 -right-2"
            style={{ willChange: 'transform' }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 6, // Reduced from 8
              repeat: Infinity,
              ease: "linear",
              type: "tween",
            }}
          >
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </motion.div>
        </span>
      </motion.h2>
      
      <motion.div
        className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full relative"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "tween" }} // Reduced delay
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm"
          style={{ willChange: 'opacity' }}
          animate={{
            opacity: [0.4, 0.6, 0.4], // Reduced opacity range
          }}
          transition={{
            duration: 2, // Reduced from 3
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
          }}
        />
      </motion.div>
      
      <motion.p
        className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, type: "tween" }} // Reduced duration and delay
      >
        Crafting digital experiences with cutting-edge technologies and creative innovation
      </motion.p>
    </motion.div>
  );
});

SkillsHeader.displayName = 'SkillsHeader';

export default SkillsHeader;
