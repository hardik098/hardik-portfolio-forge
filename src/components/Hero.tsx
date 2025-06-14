
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, Phone, Code, Terminal } from 'lucide-react';

const Hero = () => {
  const codeSnippet = `const developer = {
  name: "Hardik Anawala",
  role: "Software Developer",
  skills: [".NET", "React", "Node.js"],
  passion: "Creating innovative solutions"
};`;

  // Animation variants for text
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left side - Text content */}
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Terminal className="text-emerald-400" size={32} />
            <span className="text-emerald-400 font-mono text-lg">~/portfolio</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent inline-block overflow-hidden whitespace-nowrap"
              variants={typewriterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Hardik Anawala
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Code className="text-cyan-400" size={24} />
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 font-mono"
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Software Developer
            </motion.p>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting scalable, high-performance software solutions with expertise in .NET technologies, 
            React.js, and modern development practices. Passionate about creating innovative solutions 
            that drive real-world impact.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-2 text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <MapPin size={18} className="text-emerald-400" />
            <span>Surat, Gujarat, India</span>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a 
              href="https://www.linkedin.com/in/hardikanawala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/hardik098" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="tel:+919725016245"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-600 px-6 py-3 rounded-lg text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span>Contact</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Code snippet */}
        <motion.div 
          className="lg:flex justify-center hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className="bg-gray-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 font-mono text-sm max-w-md hover:border-emerald-500/50 transition-colors"
            variants={codeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <motion.span 
                className="text-gray-400 ml-2"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                developer.js
              </motion.span>
            </div>
            <motion.pre 
              className="text-emerald-400 leading-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              viewport={{ once: true }}
            >
              <code>{codeSnippet}</code>
            </motion.pre>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 border border-emerald-500/30 rounded-lg"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-16 h-16 border border-cyan-500/30 rounded-full"
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
