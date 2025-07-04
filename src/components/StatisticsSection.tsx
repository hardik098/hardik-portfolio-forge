import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Award, Zap } from 'lucide-react';

const StatisticsSection = () => {
  const stats = [
    {
      icon: Code2,
      value: "10+",
      label: "Projects Completed",
      color: "from-emerald-500 to-cyan-500",
      description: "Full-stack applications"
    },
    {
      icon: Users,
      value: "3+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
      description: "Professional development"
    },
    {
      icon: Award,
      value: "5+",
      label: "Technologies",
      color: "from-blue-500 to-indigo-500",
      description: "Mastered technologies"
    },
    {
      icon: Zap,
      value: "100%",
      label: "Client Satisfaction",
      color: "from-orange-500 to-red-500",
      description: "Delivery success rate"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">Achievement Highlights</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            By The <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">Numbers</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/20 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Floating icon */}
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} p-4 relative`}
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                </motion.div>

                {/* Animated counter */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.h3
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.5 + index * 0.1
                    }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <p className="text-white font-semibold text-lg mb-2">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-b from-emerald-400 to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 border border-emerald-500/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 border border-purple-500/20 rounded-lg"
          animate={{ 
            rotate: -360,
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity }
          }}
        />
      </div>
    </section>
  );
};

export default StatisticsSection;