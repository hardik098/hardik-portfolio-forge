
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Phone } from 'lucide-react';

const HeroSocialLinks = () => {
  return (
    <motion.div 
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <a 
        href="https://www.linkedin.com/in/hardikanawala/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>
      <a 
        href="https://github.com/hardik098" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 hover:scale-105"
      >
        <Github size={20} />
        <span>GitHub</span>
      </a>
      <a 
        href="tel:+919725016245"
        className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-600 px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
      >
        <Phone size={20} />
        <span>Contact</span>
      </a>
    </motion.div>
  );
};

export default HeroSocialLinks;
