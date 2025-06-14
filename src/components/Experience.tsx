
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
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center"
    },
    {
      company: "Sarvadhi Solutions Pvt. Ltd.",
      position: "ReactJs Intern",
      type: "Onsite", 
      duration: "January 2024 - June 2024",
      current: false,
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          Professional <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="flex flex-col items-center space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 relative group animate-fade-in max-w-md w-full`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {exp.current && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Current
                  </span>
                </div>
              )}
              
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-emerald-500/30 group-hover:border-emerald-500/50 transition-colors">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {exp.company}
              </h3>
              <p className="text-emerald-400 font-semibold text-lg mb-4">{exp.position}</p>
              
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-gray-300 font-medium">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
