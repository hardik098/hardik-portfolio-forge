
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const SkillsFooter = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15, type: "tween" }} // Reduced duration and delay
      className="text-center mt-20"
    >
      <motion.div
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm" // Reduced opacity
        whileHover={{ scale: 1.03, transition: { duration: 0.15, type: "tween" } }} // Reduced scale and faster transition
        animate={{
          y: [0, -3, 0], // Reduced movement
        }}
        transition={{
          duration: 3, // Reduced from 4
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween",
        }}
        style={{ willChange: 'transform' }}
      >
        <Zap className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-300 font-medium">Always Learning, Always Growing</span>
        <Zap className="w-5 h-5 text-purple-400" />
      </motion.div>
    </motion.div>
  );
});

SkillsFooter.displayName = 'SkillsFooter';

export default SkillsFooter;
