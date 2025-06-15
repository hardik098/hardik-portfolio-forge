import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Building2, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Nishkar - Jewellery Multistore Platform",
      description: "Comprehensive e-commerce platform for local jewellers and vendors with admin dashboard, vendor portal, and seamless user experience. Features real-time gold price tracking, KYC verification, and secure payment integration.",
      image: "/lovable-uploads/eeb63961-4e4d-4ad1-b31e-02525eaaf31a.png",
      tech: ["React.js", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/sarvadhiproject/Jewellery-user",
      demo: null,
      duration: "Jan 2024 - Jun 2024",
      company: "Sarvadhi Solutions Pvt. Ltd.",
      category: "E-commerce",
      featured: true
    },
    {
      title: "Unnati Mechanic - Loyalty Program",
      description: "Live industry project featuring loyalty platform with coupon scanning, reward system, unique coupon generation service, and Power BI analytics integration. Includes Cashfree payment gateway and Azure Blob Storage.",
      image: "/lovable-uploads/ff3349b0-566f-4675-b9ae-8a8cb1724727.png", 
      tech: [".NET Core", "Azure", "Power BI", "Cashfree"],
      github: null,
      demo: "https://110.226.126.143:2828/",
      duration: "June 2024 - Present",
      company: "Kombee Technologies",
      category: "Enterprise",
      featured: true
    },
    {
      title: "Hydroponics IoT Alert System",
      description: "Automated monitoring and guidance system for hydroponics using IoT technology. Features real-time sensor monitoring, nutrient level alerts, and user-friendly interfaces for optimal plant health management.",
      image: "/lovable-uploads/d067b759-90ce-4284-a07a-9a3350cf2fb5.png",
      tech: ["IoT", "Sensors", "Web App", "Mobile App"],
      github: null,
      demo: null,
      duration: "Nov 2022 - May 2023",
      company: "IIT Bombay",
      category: "IoT",
      featured: false
    },
    {
      title: "Task Management System",
      description: "Efficient task management solution with intuitive interface for adding, organizing, and tracking tasks. Built with modern web technologies for seamless task organization and productivity enhancement.",
      image: "/lovable-uploads/6814399f-2c0e-43af-90bc-1f8ae214a7a7.png",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/hardik098/PHP-Task-manager-system",
      demo: null,
      duration: "Personal Project",
      company: null,
      category: "Web App",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      "E-commerce": "from-purple-500 to-pink-500",
      "Enterprise": "from-blue-500 to-cyan-500",
      "IoT": "from-green-500 to-emerald-500",
      "Web App": "from-orange-500 to-red-500"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
            {" "}That Matter
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions with cutting-edge technologies
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProjects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden group hover:border-emerald-500/50 transition-all duration-500">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                          <motion.img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-80 lg:h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full text-white text-sm font-medium`}>
                              {project.category}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8 flex flex-col justify-between">
                          <div>
                            <div className="mb-4">
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                {project.title}
                              </h3>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                                {project.duration && (
                                  <div className="flex items-center gap-1">
                                    <Calendar size={14} className="text-emerald-400" />
                                    <span>{project.duration}</span>
                                  </div>
                                )}
                                {project.company && (
                                  <div className="flex items-center gap-1">
                                    <Building2 size={14} className="text-cyan-400" />
                                    <span>{project.company}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex gap-4">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-gray-700 rounded-lg text-white hover:from-slate-600 hover:to-gray-600 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Github size={18} />
                                <span>View Code</span>
                              </motion.a>
                            )}
                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink size={18} />
                                <span>Live Demo</span>
                                <ArrowRight size={16} className="ml-1" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-slate-800/80 border-slate-600 hover:bg-slate-700 text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-slate-800/80 border-slate-600 hover:bg-slate-700 text-white" />
          </Carousel>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">More Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/20"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-full text-white text-xs font-medium`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-2">
                      {project.duration && (
                        <div className="flex items-center gap-1">
                          <Calendar size={12} className="text-emerald-400" />
                          <span>{project.duration}</span>
                        </div>
                      )}
                      {project.company && (
                        <div className="flex items-center gap-1">
                          <Building2 size={12} className="text-cyan-400" />
                          <span>{project.company}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-700 rounded-lg text-white hover:from-slate-600 hover:to-gray-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
