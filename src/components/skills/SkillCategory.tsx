
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
        duration: 0.6, 
        delay: categoryIndex * 0.1,
        type: "tween"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2, type: "tween" }
      }}
      className="relative group cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      {/* Card Background with Pattern */}
      <div className={`absolute inset-0 ${category.bgPattern} rounded-2xl`} />
      
      {/* Main Card with optimized transitions */}
      <div className={`relative bg-gradient-to-br ${category.color} backdrop-blur-xl p-8 rounded-2xl border-2 ${category.borderColor} transition-all duration-300 hover:shadow-2xl hover:${category.glowColor} hover:border-opacity-90 overflow-hidden`}>
        
        {/* Optimized Border Glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
          style={{ willChange: 'opacity' }}
        />

        {/* Header with Icon */}
        <div className="flex items-center justify-center mb-8">
          <motion.div
            className="relative"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2, type: "tween" }
            }}
            style={{ willChange: 'transform' }}
          >
            <div className="relative p-4 bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-sm rounded-xl border border-white/25">
              <category.icon className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
          </motion.div>
        </div>

        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2, type: "tween" }
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
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-70`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1, type: "tween" }}
          style={{ willChange: 'transform' }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCategory;
