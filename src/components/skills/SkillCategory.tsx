
import React from 'react';
import { motion } from 'framer-motion';
import SkillItem from './SkillItem';

interface SkillCategoryProps {
  category: {
    title: string;
    skills: string[];
    color: string;
    borderColor: string;
    glowColor: string;
    icon: any;
    bgPattern: string;
  };
  categoryIndex: number;
}

const SkillCategory = ({ category, categoryIndex }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: categoryIndex * 0.05,
        type: "tween",
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.1, type: "tween", ease: "easeOut" }
      }}
      className="relative group cursor-pointer"
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)',
        contain: 'layout style paint'
      }}
    >
      {/* Card Background with Pattern */}
      <div className={`absolute inset-0 ${category.bgPattern} rounded-2xl`} />
      
      {/* Main Card with optimized transitions */}
      <div className={`relative bg-gradient-to-br ${category.color} backdrop-blur-xl p-8 rounded-2xl border-2 ${category.borderColor} transition-all duration-200 hover:shadow-2xl hover:${category.glowColor} hover:border-opacity-90 overflow-hidden`}>
        
        {/* Optimized Border Glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-200`} // Reduced opacity and duration
          style={{ willChange: 'opacity' }}
        />

        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-8">
          <motion.div
            className="relative"
            whileHover={{ 
              scale: 1.03, // Reduced from 1.05
              transition: { duration: 0.15, type: "tween" } // Faster transition
            }}
            style={{ willChange: 'transform' }}
          >
            <div className="relative p-4 bg-gradient-to-br from-white/20 to-white/8 backdrop-blur-sm rounded-xl border border-white/20"> {/* Reduced opacity */}
              <category.icon className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        </div>

        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          whileHover={{ 
            scale: 1.015, // Reduced from 1.02
            transition: { duration: 0.15, type: "tween" } // Faster transition
          }}
          style={{ willChange: 'transform' }}
        >
          {category.title}
        </motion.h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem
              key={skillIndex}
              skill={skill}
              skillIndex={skillIndex}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

        {/* Bottom Accent with optimized animation */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-60`} // Reduced opacity
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: categoryIndex * 0.08, type: "tween" }} // Reduced duration and delay
          style={{ willChange: 'transform' }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCategory;
