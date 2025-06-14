
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Color schemes for different sections
  const sectionColors = {
    home: {
      logo: 'from-emerald-400 to-cyan-400',
      navHover: 'hover:text-emerald-400',
      underline: 'bg-emerald-400',
      border: 'border-emerald-500/20',
      mobileHover: 'hover:text-emerald-400',
      active: 'text-emerald-400'
    },
    about: {
      logo: 'from-cyan-400 to-purple-500',
      navHover: 'hover:text-cyan-400',
      underline: 'bg-cyan-400',
      border: 'border-cyan-500/20',
      mobileHover: 'hover:text-cyan-400',
      active: 'text-cyan-400'
    },
    experience: {
      logo: 'from-purple-500 to-pink-500',
      navHover: 'hover:text-purple-400',
      underline: 'bg-purple-400',
      border: 'border-purple-500/20',
      mobileHover: 'hover:text-purple-400',
      active: 'text-purple-400'
    },
    projects: {
      logo: 'from-pink-500 to-emerald-400',
      navHover: 'hover:text-pink-400',
      underline: 'bg-pink-400',
      border: 'border-pink-500/20',
      mobileHover: 'hover:text-pink-400',
      active: 'text-pink-400'
    },
    skills: {
      logo: 'from-emerald-400 via-purple-500 to-pink-500',
      navHover: 'hover:text-emerald-400',
      underline: 'bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500',
      border: 'border-emerald-500/20',
      mobileHover: 'hover:text-emerald-400',
      active: 'text-emerald-400'
    },
    contact: {
      logo: 'from-cyan-400 to-emerald-400',
      navHover: 'hover:text-cyan-400',
      underline: 'bg-cyan-400',
      border: 'border-cyan-500/20',
      mobileHover: 'hover:text-cyan-400',
      active: 'text-cyan-400'
    }
  };

  const currentColors = sectionColors[activeSection as keyof typeof sectionColors] || sectionColors.home;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? `bg-slate-900/95 backdrop-blur-md border-b ${currentColors.border}` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold bg-gradient-to-r ${currentColors.logo} bg-clip-text text-transparent transition-all duration-500`}>
              HA
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      isActive 
                        ? `${currentColors.active} font-bold` 
                        : `text-gray-300 ${currentColors.navHover}`
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 ${currentColors.underline} transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-gray-300 ${currentColors.navHover} transition-colors`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className={`md:hidden bg-slate-900/95 backdrop-blur-md border-b ${currentColors.border}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    isActive 
                      ? `${currentColors.active} font-bold` 
                      : `text-gray-300 ${currentColors.mobileHover}`
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
