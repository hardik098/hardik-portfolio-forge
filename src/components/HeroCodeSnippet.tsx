
import React from 'react';
import { motion } from 'framer-motion';

const HeroCodeSnippet = () => {
  const codeSnippet = `const developer = {
  name: "Hardik Anawala",
  role: "Software Developer",
  skills: [".NET", "React", "Node.js"],
  passion: "Creating innovative solutions"
};`;

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      className="lg:flex justify-center hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div 
        className="bg-gray-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 font-mono text-sm max-w-md hover:border-emerald-500/50 transition-colors"
        variants={codeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <motion.span 
            className="text-gray-400 ml-2"
            animate={{
              color: ['#9CA3AF', '#10B981', '#06B6D4', '#8B5CF6', '#EC4899', '#9CA3AF']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            developer.js
          </motion.span>
        </div>
        <motion.pre 
          className="text-emerald-400 leading-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          viewport={{ once: true }}
        >
          <code>{codeSnippet}</code>
        </motion.pre>
      </motion.div>
    </motion.div>
  );
};

export default HeroCodeSnippet;
