
import React from 'react';
import { Database, Smartphone, Code, Server, Layers, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: ["ASP.NET Core MVC", ".NET Technologies", "Node.js", "Express.js", "Java EE", "PHP"]
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "JavaScript", "Ajax", "jQuery", "HTML5", "CSS3"]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Android (Kotlin)", "iOS (Swift)", "Cross-platform Development"]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQLite", "RDBMS", "Azure Blob Storage"]
    },
    {
      title: "Architecture & Patterns",
      icon: Layers,
      skills: ["CQRS Pattern", "RESTful APIs", "Microservices", "MVC Architecture"]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git & GitHub", "Problem Solving", "Critical Thinking", "IoT Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Technical <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                    <IconComponent size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-3 hover:border-emerald-500/40 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-cyan-500/15 transition-all duration-200 group/skill"
                    >
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
