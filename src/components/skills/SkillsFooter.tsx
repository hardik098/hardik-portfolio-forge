
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const SkillsFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-center mt-20"
    >
      <motion.div
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-300 font-medium">Always Learning, Always Growing</span>
        <Zap className="w-5 h-5 text-purple-400" />
      </motion.div>
    </motion.div>
  );
};

export default SkillsFooter;
