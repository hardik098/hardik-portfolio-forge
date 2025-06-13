
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Kombee Technologies",
      position: ".NET Developer Intern",
      type: "Onsite",
      duration: "June 2024 - Present",
      description: "Working on enterprise-level applications using .NET Core, implementing CQRS patterns, and developing scalable backend solutions.",
      current: true
    },
    {
      company: "Sarvadhi Solutions Pvt. Ltd.",
      position: "ReactJs Intern",
      type: "Onsite", 
      duration: "January 2024 - June 2024",
      description: "Developed responsive web applications using React.js, collaborated on UI/UX improvements, and gained experience in modern frontend development practices.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Professional <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 relative group animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {exp.current && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{exp.company}</h3>
                  <p className="text-emerald-400 font-semibold text-lg">{exp.position}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-300 font-medium mb-1">
                    <Calendar size={16} className="text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-400" />
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
