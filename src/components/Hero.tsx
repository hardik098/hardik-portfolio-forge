
import React from 'react';
import { Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              HA
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full blur-md opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Hardik Anawala
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
          Full-Stack Software Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in delay-400">
          Crafting scalable, high-performance software solutions with expertise in .NET technologies, 
          React.js, and modern development practices. Passionate about creating innovative solutions 
          that drive real-world impact.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 animate-fade-in delay-500">
          <MapPin size={18} />
          <span>Surat, Gujarat, India</span>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in delay-600">
          <a 
            href="https://www.linkedin.com/in/hardikanawala/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/hardik098" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="tel:+919725016245"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
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
