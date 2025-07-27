import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#home', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Experience', href: '#experience', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Skills', href: '#skills', type: 'scroll' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];

  // Color schemes for different sections
  const sectionColors = {
    home: {
      logo: 'from-emerald-400 to-cyan-400',
      navHover: 'hover:text-emerald-400',
      activeColor: 'text-emerald-400',
      underline: 'bg-emerald-400',
      border: 'border-emerald-500/20',
    },
    about: {
      logo: 'from-cyan-400 to-purple-500',
      navHover: 'hover:text-cyan-400',
      activeColor: 'text-cyan-400',
      underline: 'bg-cyan-400',
      border: 'border-cyan-500/20',
    },
    experience: {
      logo: 'from-purple-500 to-pink-500',
      navHover: 'hover:text-purple-400',
      activeColor: 'text-purple-400',
      underline: 'bg-purple-400',
      border: 'border-purple-500/20',
    },
    projects: {
      logo: 'from-pink-500 to-emerald-400',
      navHover: 'hover:text-pink-400',
      activeColor: 'text-pink-400',
      underline: 'bg-pink-400',
      border: 'border-pink-500/20',
    },
    skills: {
      logo: 'from-emerald-400 via-purple-500 to-pink-500',
      navHover: 'hover:text-emerald-400',
      activeColor: 'text-emerald-400',
      underline: 'bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500',
      border: 'border-emerald-500/20',
    },
    contact: {
      logo: 'from-cyan-400 to-emerald-400',
      navHover: 'hover:text-cyan-400',
      activeColor: 'text-cyan-400',
      underline: 'bg-cyan-400',
      border: 'border-cyan-500/20',
    }
  };

  const currentColors = sectionColors[activeSection as keyof typeof sectionColors] || sectionColors.home;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only track sections on home page
      if (location.pathname !== '/') return;
      
      // Get all sections
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // If at top of page, always show home as active
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      let currentSection = 'home';
      
      // Check each section to find which one is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;
          
          // Check if the section is currently visible in viewport
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // If we're at the bottom of the page, make sure contact is active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === 'navigate') {
      navigate(item.href);
    } else {
      // Handle scroll navigation (only works on home page)
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => scrollToSection(item.href), 100);
      } else {
        scrollToSection(item.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      // Immediately set active section for instant feedback
      setActiveSection(sectionId);
      
      // Smooth scroll to section
      const yOffset = -80; // Account for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? `bg-slate-900/95 backdrop-blur-md border-b ${currentColors.border}` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className={`text-2xl font-bold bg-gradient-to-r ${currentColors.logo} bg-clip-text text-transparent transition-all duration-500 cursor-pointer`}
            >
              HA
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = (item.type === 'scroll' && activeSection === sectionId) || 
                                (item.type === 'navigate' && location.pathname === item.href);
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      isActive 
                        ? `${currentColors.activeColor} font-bold scale-110` 
                        : `text-gray-300 ${currentColors.navHover}`
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 ${currentColors.underline} transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
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
              const sectionId = item.href.substring(1);
              const isActive = (item.type === 'scroll' && activeSection === sectionId) || 
                              (item.type === 'navigate' && location.pathname === item.href);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 rounded-md ${
                    isActive 
                      ? `${currentColors.activeColor} font-bold bg-white/10` 
                      : `text-gray-300 ${currentColors.navHover}`
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
