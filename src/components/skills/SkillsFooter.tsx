
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const SkillsFooter = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.29, delay: 0.08 }}
    className="text-center mt-20"
  >
    <motion.div
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm"
      whileHover={{ scale: 1.015, transition: { duration: 0.09 } }}
      animate={{
        y: [0, -1, 0]
      }}
      transition={{
        duration: 1.99,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Zap className="w-5 h-5 text-cyan-400" />
      <span className="text-cyan-300 font-medium">Always Learning, Always Growing</span>
      <Zap className="w-5 h-5 text-purple-400" />
    </motion.div>
  </motion.div>
);
export default SkillsFooter;
