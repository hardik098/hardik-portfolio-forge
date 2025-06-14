
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Backend Development", 
      skills: [".NET Core", "C#", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      title: "Database & Cloud",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Azure", "AWS", "Docker"],
      color: "from-purple-500/20 to-indigo-500/20", 
      borderColor: "border-purple-500/30"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Visual Studio", "VS Code", "Postman", "Jenkins", "Agile"],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
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
            Technical <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8"></div>
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
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-700/50 text-center hover:border-emerald-500/30 transition-all duration-300 hover:bg-slate-700/50"
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
