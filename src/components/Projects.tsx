
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Database, Globe, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Nishkar - Jewellery Multistore Platform",
      description: "Comprehensive e-commerce platform for local jewellers and vendors with admin dashboard, vendor portal, and seamless user experience. Features real-time gold price tracking, KYC verification, and secure payment integration.",
      image: "/lovable-uploads/141648ab-a447-4a09-8077-34f047a51327.png",
      tech: ["React.js", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/sarvadhiproject/Jewellery-user",
      demo: null,
      icon: Globe,
      duration: "Jan 2024 - Jun 2024",
      company: "Sarvadhi Solutions Pvt. Ltd."
    },
    {
      title: "Unnati Mechanic - Loyalty Program",
      description: "Live industry project featuring loyalty platform with coupon scanning, reward system, unique coupon generation service, and Power BI analytics integration. Includes Cashfree payment gateway and Azure Blob Storage.",
      image: "/lovable-uploads/dd03c944-c23c-4f29-bde4-344101cf6bfb.png", 
      tech: [".NET Core", "Azure", "Power BI", "Cashfree"],
      github: null,
      demo: "https://110.226.126.143:2828/",
      icon: Zap,
      duration: "June 2024 - Present",
      company: "Kombee Technologies"
    },
    {
      title: "Hydroponics IoT Alert System",
      description: "Automated monitoring and guidance system for hydroponics using IoT technology. Features real-time sensor monitoring, nutrient level alerts, and user-friendly interfaces for optimal plant health management.",
      image: "/lovable-uploads/141648ab-a447-4a09-8077-34f047a51327.png",
      tech: ["IoT", "Sensors", "Web App", "Mobile App"],
      github: null,
      demo: null,
      icon: Database,
      duration: "Nov 2022 - May 2023",
      company: "IIT Bombay"
    },
    {
      title: "Task Management System",
      description: "Efficient task management solution with intuitive interface for adding, organizing, and tracking tasks. Built with modern web technologies for seamless task organization and productivity enhancement.",
      image: "/lovable-uploads/dd03c944-c23c-4f29-bde4-344101cf6bfb.png",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/hardik098/PHP-Task-manager-system",
      demo: null,
      icon: Code2,
      duration: null,
      company: null
    }
  ];

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 150);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer active:scale-95 hover:shadow-2xl hover:shadow-emerald-400/20 hover:-rotate-1"
              onClick={handleCardClick}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <project.icon className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.duration && (
                    <p className="text-emerald-400 text-sm font-medium">
                      {project.duration}
                    </p>
                  )}
                  {project.company && (
                    <p className="text-gray-400 text-sm">
                      {project.company}
                    </p>
                  )}
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-700 rounded-lg text-white hover:from-slate-600 hover:to-gray-600 transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
