
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Smartphone, Code, Server, Layers, Wrench, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: ["ASP.NET Core MVC", ".NET Technologies", "Node.js", "Express.js", "Java EE", "PHP"],
      color: "from-red-700 to-red-900"
    },
    {
      title: "Frontend Development", 
      icon: Code,
      skills: ["React.js", "JavaScript", "Ajax", "jQuery", "HTML5", "CSS3"],
      color: "from-green-700 to-green-900"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Android (Kotlin)", "iOS (Swift)", "Cross-platform Development"],
      color: "from-blue-800 to-blue-950"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQLite", "RDBMS", "Azure Blob Storage"],
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Architecture & Patterns",
      icon: Layers,
      skills: ["CQRS Pattern", "RESTful APIs", "Microservices", "MVC Architecture"],
      color: "from-red-800 to-black"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git & GitHub", "Azure Cloud", "Docker", "CI/CD Pipelines"],
      color: "from-green-800 to-black"
    },
    {
      title: "Problem Solving",
      icon: Brain,
      skills: ["Algorithm Design", "Critical Thinking", "Code Optimization", "Debugging"],
      color: "from-blue-900 to-black"
    },
    {
      title: "IoT & Integration",
      icon: Globe,
      skills: ["IoT Development", "API Integration", "Third-party Services", "Real-time Systems"],
      color: "from-purple-900 to-black"
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
          Technical <span className="bg-gradient-to-r from-red-400 to-green-500 bg-clip-text text-transparent">Arsenal</span>
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
                <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skillIndex}
                          className="bg-gradient-to-r from-red-500/15 to-green-500/15 border border-red-500/30 rounded-lg p-2 hover:border-red-500/50 hover:bg-gradient-to-r hover:from-red-500/25 hover:to-green-500/25 transition-all duration-200 group/skill"
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
      </div>
    </section>
  );
};

export default Skills;
