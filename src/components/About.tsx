
import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '15+' },
    { icon: Target, label: 'Technologies', value: '10+' },
    { icon: User, label: 'Happy Clients', value: '8+' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a dedicated software developer with over 3 years of experience in creating 
              scalable web applications and robust backend systems. My expertise spans across 
              modern technologies including .NET, React.js, and cloud platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I believe in writing clean, maintainable code and staying updated with the latest 
              industry trends. My goal is to create solutions that not only meet business 
              requirements but also provide exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg text-emerald-400">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg text-blue-400">
                Team Player
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-lg text-cyan-400">
                Quick Learner
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
