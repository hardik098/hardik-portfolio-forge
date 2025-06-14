import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Kombee Technologies",
      position: ".NET Developer Intern",
      type: "Onsite",
      duration: "June 2024 - Present",
      current: true,
      logo: "/lovable-uploads/dd03c944-c23c-4f29-bde4-344101cf6bfb.png"
    },
    {
      company: "Sarvadhi Solutions Pvt. Ltd.",
      position: "ReactJs Intern",
      type: "Onsite", 
      duration: "January 2024 - June 2024",
      current: false,
      logo: "/lovable-uploads/85f04446-3e61-43fe-8a09-bd4885f7674a.png"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Professional <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                style={{ animationDelay: `${(index + 1) * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full border-4 border-black z-10 animate-pulse"></div>
                
                {/* Experience card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} animate-fade-in`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 relative group">
                    {exp.current && (
                      <div className="absolute -top-3 right-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Current
                        </span>
                      </div>
                    )}
                    
                    {/* Company logo */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors bg-white p-2">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                          key={exp.logo}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-center mb-4">{exp.position}</p>
                    
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Calendar size={14} className="text-cyan-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-purple-400" />
                        <span className="bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 text-purple-400 px-2 py-1 rounded-full text-xs border border-purple-400/30">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline connector line */}
                <div className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50 ${index % 2 === 0 ? 'left-1/2 ml-3' : 'right-1/2 mr-3'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
