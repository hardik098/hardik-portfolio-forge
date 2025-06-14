
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Smartphone, Code, Server, Layers, Wrench, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: ["ASP.NET Core MVC", ".NET Technologies", "Node.js", "Express.js", "Java EE", "PHP"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Frontend Development", 
      icon: Code,
      skills: ["React.js", "JavaScript", "Ajax", "jQuery", "HTML5", "CSS3"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Android (Kotlin)", "iOS (Swift)", "Cross-platform Development"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQLite", "RDBMS", "Azure Blob Storage"],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Architecture & Patterns",
      icon: Layers,
      skills: ["CQRS Pattern", "RESTful APIs", "Microservices", "MVC Architecture"],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git & GitHub", "Azure Cloud", "Docker", "CI/CD Pipelines"],
      color: "from-red-500 to-red-700"
    },
    {
      title: "Problem Solving",
      icon: Brain,
      skills: ["Algorithm Design", "Critical Thinking", "Code Optimization", "Debugging"],
      color: "from-pink-500 to-pink-700"
    },
    {
      title: "IoT & Integration",
      icon: Globe,
      skills: ["IoT Development", "API Integration", "Third-party Services", "Real-time Systems"],
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Arsenal</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex}
                          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-2 hover:border-emerald-500/40 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-cyan-500/15 transition-all duration-200 group/skill"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill proficiency visualization */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Core <span className="text-emerald-400">Proficiencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { skill: ".NET Core", level: 90 },
              { skill: "React.js", level: 85 },
              { skill: "Node.js", level: 80 },
              { skill: "PostgreSQL", level: 85 }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-700"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-emerald-400"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 30 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 30 * (1 - item.level / 100) }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.level}%</span>
                  </div>
                </div>
                <span className="text-gray-300 font-medium text-sm">{item.skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
