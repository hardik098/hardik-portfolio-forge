
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

const SkillCategory = ({ category, categoryIndex }: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.23,
      delay: categoryIndex * 0.05,
    }}
    whileHover={{
      scale: 1.01,
      transition: { duration: 0.10, ease: "easeOut" }
    }}
    className="relative group cursor-pointer"
  >
    <div className={`absolute inset-0 ${category.bgPattern} rounded-2xl`} />
    <div className={`relative bg-gradient-to-br ${category.color} backdrop-blur-xl p-8 rounded-2xl border-2 ${category.borderColor} transition-all duration-100 hover:shadow-2xl hover:${category.glowColor} hover:border-opacity-85 overflow-hidden`}>
      {/* Border Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl`}
      />
      <div className="flex items-center justify-center mb-8">
        <div className="relative p-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
          <category.icon className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
      </div>
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
        whileHover={{
          scale: 1.005,
          transition: { duration: 0.11 }
        }}
      >
        {category.title}
      </motion.h3>
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
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-60`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.19, delay: categoryIndex * 0.02 }}
      />
    </div>
  </motion.div>
);
export default SkillCategory;
