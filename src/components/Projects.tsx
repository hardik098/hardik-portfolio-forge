
import React from 'react';

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
      ]
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
      ]
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
      duration: "November 2022 - May 2023"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-purple-400 font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {projects[2].title}
              </h3>
              <span className="text-gray-400 text-sm mt-2 md:mt-0">{projects[2].duration}</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">{projects[2].description}</p>
            
            <div className="mb-6">
              <h4 className="text-purple-400 font-semibold mb-3">Key Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {projects[2].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {projects[2].technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
