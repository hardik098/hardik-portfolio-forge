import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Dynamic Software Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a dynamic and results-driven Software Developer with extensive hands-on experience in 
                delivering scalable, high-performance software solutions. My expertise spans full-stack development 
                with a particular strength in .NET technologies and modern web frameworks.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in building robust, user-centric applications that solve complex business challenges. My 
                approach combines technical excellence with creative problem-solving, ensuring every solution is 
                both efficient and scalable.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                What drives me is the opportunity to work in fast-paced, collaborative environments where I can 
                leverage emerging technologies to create innovative solutions. I'm passionate about continuous 
                learning and bringing a growth mindset to every project, consistently delivering results that exceed 
                expectations and create real-world impact.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 rounded-lg text-cyan-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Problem Solver
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Team Player
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-lg text-pink-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Quick Learner
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm">
                <spline-viewer 
                  url="https://prod.spline.design/g2gn6r30olmKSyVw/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
