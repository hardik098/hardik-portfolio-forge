
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, MapPin } from 'lucide-react';

const HeroText = () => {
  const [inView, setInView] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const nameWords = ['Hardik', 'Anawala'];

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setCurrentWordIndex(0);
          
          // Start word-by-word animation
          const timer = setTimeout(() => {
            setCurrentWordIndex(1);
          }, 800);
          
          return () => clearTimeout(timer);
        } else {
          setInView(false);
          setCurrentWordIndex(0);
        }
      },
      { threshold: 0.3 }
    );

    const homeSection = document.getElementById('home');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
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
      
      <motion.p 
        className="text-2xl text-gray-300 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Hello, I'm
      </motion.p>
      
      <div className="text-5xl md:text-7xl font-bold text-white mb-6 min-h-[80px] md:min-h-[100px]">
        <div className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent flex flex-wrap gap-4">
          <AnimatePresence mode="wait">
            {inView && nameWords.map((word, index) => (
              index <= currentWordIndex && (
                <motion.span
                  key={`${word}-${inView}`}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.6, -0.05, 0.01, 0.99] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <motion.div 
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Code className="text-cyan-400" size={24} />
        <motion.p 
          className="text-xl md:text-2xl font-mono relative"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-pulse"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '300% 100%'
            }}
          >
            Software Developer
          </motion.span>
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
    </motion.div>
  );
};

export default HeroText;
