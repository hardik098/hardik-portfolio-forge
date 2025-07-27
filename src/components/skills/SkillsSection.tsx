
import React, { memo } from 'react';
import { skillCategories } from './skillsData';
import FloatingElements from './FloatingElements';
import SkillsHeader from './SkillsHeader';
import SkillCategory from './SkillCategory';
import SkillsFooter from './SkillsFooter';

const SkillsSection = memo(() => {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
      style={{ 
        contain: 'layout style paint',
        willChange: 'transform',
        transform: 'translateZ(0)' 
      }}
    >
      <FloatingElements />

      <div className="max-w-6xl mx-auto relative z-10">
        <SkillsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              category={category}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>

        <SkillsFooter />
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
