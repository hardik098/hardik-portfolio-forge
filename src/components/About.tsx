
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a <span className="text-purple-400 font-semibold">dynamic and results-driven Software Developer</span> with 
            extensive hands-on experience in delivering scalable, high-performance software solutions. My expertise spans 
            full-stack development with a particular strength in <span className="text-blue-400 font-semibold">.NET technologies</span> and 
            modern web frameworks.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I specialize in building <span className="text-purple-400 font-semibold">robust, user-centric applications</span> that 
            solve complex business challenges. My approach combines technical excellence with creative problem-solving, 
            ensuring every solution is both efficient and scalable.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            What drives me is the opportunity to work in <span className="text-blue-400 font-semibold">fast-paced, collaborative environments</span> where 
            I can leverage emerging technologies to create innovative solutions. I'm passionate about continuous learning 
            and bringing a growth mindset to every project, consistently delivering results that exceed expectations and 
            create <span className="text-purple-400 font-semibold">real-world impact</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
