
import React from 'react';
import { Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 relative group">
            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl group-hover:scale-105 transition-transform duration-300">
              HA
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full blur-md opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            Hardik Anawala
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
          Full-Stack Software Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in delay-400 leading-relaxed">
          Crafting scalable, high-performance software solutions with expertise in .NET technologies, 
          React.js, and modern development practices. Passionate about creating innovative solutions 
          that drive real-world impact.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 animate-fade-in delay-500">
          <MapPin size={18} className="text-emerald-400" />
          <span>Surat, Gujarat, India</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-600">
          <a 
            href="https://www.linkedin.com/in/hardikanawala/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/hardik098" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white hover:bg-slate-500/20 hover:border-slate-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/20"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="tel:+919725016245"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-600 px-6 py-3 rounded-full text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
