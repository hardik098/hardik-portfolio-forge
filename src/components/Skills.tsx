
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["ASP.NET Core MVC", ".NET Technologies", "Node.js", "Express.js", "Java EE", "PHP"]
    },
    {
      title: "Frontend Development", 
      skills: ["React.js", "JavaScript", "Ajax", "jQuery", "HTML5", "CSS3"]
    },
    {
      title: "Mobile Development",
      skills: ["Android (Kotlin)", "iOS (Swift)", "Cross-platform Development"]
    },
    {
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "SQLite", "RDBMS", "Azure Blob Storage"]
    },
    {
      title: "Architecture & Patterns",
      skills: ["CQRS Pattern", "RESTful APIs", "Microservices", "MVC Architecture"]
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Problem Solving", "Critical Thinking", "IoT Development"]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Technical <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-3 hover:border-purple-500/40 transition-all duration-200"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
