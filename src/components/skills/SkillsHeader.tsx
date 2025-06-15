
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const SkillsHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.32 }}
    className="text-center mb-20"
  >
    {/* Single pulse attention icon */}
    <motion.div
      className="inline-flex items-center mb-8 justify-center"
      animate={{
        scale: [1, 1.09, 1], opacity: [1, 0.75, 1]
      }}
      transition={{
        duration: 2.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative p-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
    </motion.div>

    <motion.h2
      className="text-5xl md:text-7xl font-bold text-white mb-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.09 }}
    >
      Technical{" "}
      <span className="relative">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Mastery
        </span>
        <span className="absolute -top-2 -right-2 animate-spin-slow">
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </span>
      </span>
    </motion.h2>
    <motion.div
      className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.44, delay: 0.14 }}
    />
    <motion.p
      className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: 0.16 }}
    >
      Crafting digital experiences with cutting-edge technologies and creative innovation
    </motion.p>
  </motion.div>
);
export default SkillsHeader;
