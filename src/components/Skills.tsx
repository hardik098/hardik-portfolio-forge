
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Settings,
  Code2,
  FileCode,
  Braces,
  Palette,
  Zap,
  Wind,
  Server,
  Globe,
  Layers,
  GitBranch,
  Monitor,
  Terminal,
  Mail,
  Clock,
  Users,
  Sparkles,
  Star
} from 'lucide-react';

const Skills = () => {
  // Icon mapping for individual skills
  const skillIcons: Record<string, any> = {
    "React.js": Code2,
    "TypeScript": FileCode,
    "HTML5": Code,
    "CSS3": Palette,
    "JavaScript": Braces,
    "Tailwind CSS": Wind,
    ".NET Core": Layers,
    "C#": Code2,
    "Node.js": Server,
    "Express.js": Zap,
    "RESTful APIs": Globe,
    "GraphQL": Database,
    "SQL Server": Database,
    "MongoDB": Database,
    "PostgreSQL": Database,
    "Azure": Cloud,
    "AWS": Cloud,
    "Docker": Layers,
    "Git": GitBranch,
    "Visual Studio": Monitor,
    "VS Code": Terminal,
    "Postman": Mail,
    "Jenkins": Settings,
    "Agile": Users
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      color: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/25",
      icon: Code,
      bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-purple-600/5 to-transparent"
    },
    {
      title: "Backend Development", 
      skills: [".NET Core", "C#", "Node.js", "Express.js", "RESTful APIs", "GraphQL"],
      color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      borderColor: "border-emerald-500/50",
      glowColor: "shadow-emerald-500/25",
      icon: Settings,
      bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/10 via-teal-600/5 to-transparent"
    },
    {
      title: "Database & Cloud",
      skills: ["SQL Server", "MongoDB", "PostgreSQL", "Azure", "AWS", "Docker"],
      color: "from-orange-500/20 via-red-500/20 to-pink-500/20",
      borderColor: "border-orange-500/50",
      glowColor: "shadow-orange-500/25",
      icon: Database,
      bgPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-600/10 via-red-600/5 to-transparent"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Visual Studio", "VS Code", "Postman", "Jenkins", "Agile"],
      color: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
      borderColor: "border-violet-500/50",
      glowColor: "shadow-violet-500/25",
      icon: Cloud,
      bgPattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-600/10 via-purple-600/5 to-transparent"
    }
  ];

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Floating Icon */}
          <motion.div
            className="inline-flex items-center justify-center mb-8"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative p-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mastery
              </span>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </motion.div>
            </span>
          </motion.h2>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          <motion.p
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting digital experiences with cutting-edge technologies and creative innovation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2,
              }}
              className={`relative group cursor-pointer`}
            >
              {/* Card Background with Pattern */}
              <div className={`absolute inset-0 ${category.bgPattern} rounded-2xl`} />
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br ${category.color} backdrop-blur-xl p-8 rounded-2xl border-2 ${category.borderColor} transition-all duration-500 hover:shadow-2xl hover:${category.glowColor} hover:border-opacity-80 overflow-hidden`}>
                
                {/* Animated Border Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Header with Icon */}
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-md opacity-50`}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative p-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <category.icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                  </motion.div>
                </div>

                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {category.title}
                </motion.h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skillIcons[skill] || Code;
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ 
                          scale: 1.08,
                          y: -5,
                          rotateX: 10,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          type: "spring",
                          stiffness: 200
                        }}
                        className="group/skill relative"
                      >
                        {/* Skill Card Background Glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover/skill:opacity-40 blur-sm transition-opacity duration-300`}
                        />
                        
                        {/* Skill Card */}
                        <div className="relative bg-slate-800/60 backdrop-blur-sm px-4 py-4 rounded-xl border border-slate-600/30 hover:border-white/30 transition-all duration-300 hover:bg-slate-700/60">
                          <div className="flex items-center justify-center gap-3">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <SkillIcon className="w-5 h-5 text-white group-hover/skill:text-cyan-300 transition-colors duration-300" />
                            </motion.div>
                            <span className="text-gray-200 font-medium text-sm group-hover/skill:text-white transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-60`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-medium">Always Learning, Always Growing</span>
            <Zap className="w-5 h-5 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
