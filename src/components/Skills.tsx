
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      color: "from-cyan-400/20 via-purple-500/20 to-pink-500/20",
      borderColor: "border-cyan-400/30",
      icon: Code
    },
    {
      title: "Backend Development", 
      skills: [".NET Core", "C#", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
      color: "from-cyan-400/20 via-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      icon: Settings
    },
    {
      title: "Database & Cloud",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Azure", "AWS", "Docker"],
      color: "from-cyan-400/20 via-purple-500/20 to-pink-500/20", 
      borderColor: "border-pink-500/30",
      icon: Database
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Visual Studio", "VS Code", "Postman", "Jenkins", "Agile"],
      color: "from-cyan-400/20 via-purple-500/20 to-pink-500/20",
      borderColor: "border-cyan-400/30",
      icon: Cloud
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm p-8 rounded-xl border ${category.borderColor} hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    rotate: { duration: 0.6 }
                  }}
                  className="p-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg"
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                    }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-700/50 text-center hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-700/50 cursor-pointer"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
