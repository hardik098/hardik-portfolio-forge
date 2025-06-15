
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { skillIcons } from './skillsData';

interface SkillItemProps {
  skill: string;
  skillIndex: number;
  categoryIndex: number;
}

const SkillItem = ({ skill, skillIndex, categoryIndex }: SkillItemProps) => {
  const SkillIcon = skillIcons[skill] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      transition={{ 
        duration: 0.3, 
        delay: (categoryIndex * 0.05) + (skillIndex * 0.02),
      }}
      className="group/skill relative"
    >
      {/* Skill Card */}
      <div className="relative bg-slate-800/60 backdrop-blur-sm px-4 py-4 rounded-xl border border-slate-600/30 hover:border-white/30 transition-all duration-200 hover:bg-slate-700/60">
        <div className="flex items-center justify-center gap-3">
          <motion.div
            whileHover={{ 
              rotate: 180,
              transition: { duration: 0.3 }
            }}
          >
            <SkillIcon className="w-5 h-5 text-white group-hover/skill:text-cyan-300 transition-colors duration-200" />
          </motion.div>
          <span className="text-gray-200 font-medium text-sm group-hover/skill:text-white transition-colors duration-200">
            {skill}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;
