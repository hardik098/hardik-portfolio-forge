
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Nishkar - Jewelry Multistore Platform",
      description: "A comprehensive full-stack e-commerce platform designed for local jewellers, featuring advanced inventory management and real-time gold price tracking.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Cloudinary", "GoldApi.io"],
      features: [
        "Admin and vendor management panels",
        "Real-time gold price tracking with cron jobs",
        "Image management with Cloudinary integration",
        "Automated email services with NodeMailer"
      ],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&crop=center",
      gradient: "from-yellow-600 to-amber-800"
    },
    {
      title: "Unnati Mechanic - Loyalty Program",
      description: "An innovative loyalty platform enabling users to scan coupons and earn rewards, with integrated payment processing and analytics.",
      technologies: ["React.js", "Node.js", "Cashfree", "Azure Blob Storage", "Power BI"],
      features: [
        "Unique coupon generation system",
        "Scheduled background services",
        "Cashfree payment gateway integration",
        "Real-time analytics with Power BI dashboards"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
      gradient: "from-blue-600 to-indigo-800"
    },
    {
      title: "Hydroponics IoT System - IIT Bombay",
      description: "An IoT-based automated monitoring system for hydroponic plant growth, providing real-time insights and proactive plant care.",
      technologies: ["IoT Sensors", "Real-time Monitoring", "Alert Systems"],
      features: [
        "Automated nutrient level monitoring",
        "Environmental parameter tracking",
        "Real-time alerts and notifications",
        "Proactive plant care guidance"
      ],
      duration: "November 2022 - May 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
      gradient: "from-green-600 to-emerald-800"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                <div className="absolute top-4 right-4">
                  <div className="flex gap-2">
                    <motion.div 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} className="text-white" />
                    </motion.div>
                    <motion.div 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-emerald-400 font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start text-sm">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300 px-2 py-1 rounded-full text-xs hover:border-emerald-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={projects[2].image} 
                  alt={projects[2].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${projects[2].gradient} opacity-60`}></div>
                {projects[2].duration && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar size={14} className="text-white" />
                    <span className="text-white text-xs">{projects[2].duration}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {projects[2].title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">{projects[2].description}</p>
                
                <div className="mb-4">
                  <h4 className="text-emerald-400 font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {projects[2].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start text-sm">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {projects[2].technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300 px-2 py-1 rounded-full text-xs hover:border-emerald-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
