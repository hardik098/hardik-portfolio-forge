
import React from 'react';
import { Github, Linkedin, Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 animate-fade-in">
          Get In <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 md:p-12 mb-12 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 animate-fade-in delay-200">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations. 
            Whether you're looking for a skilled developer or want to explore potential partnerships, 
            I'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a 
              href="tel:+919725016245"
              className="flex items-center justify-center gap-3 bg-white/5 border border-emerald-500/20 rounded-xl p-4 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <Phone size={20} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 group-hover:text-white">+91 9725016245</span>
            </a>
            
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-emerald-500/20 rounded-xl p-4">
              <MapPin size={20} className="text-cyan-400" />
              <span className="text-gray-300">Surat, Gujarat, India</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/hardikanawala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-xl text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/hardik098" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 rounded-xl text-white hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-emerald-500/20 pt-8 animate-fade-in delay-400">
          <p className="text-gray-400">
            © 2024 Hardik Anawala. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
