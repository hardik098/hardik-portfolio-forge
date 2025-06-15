
import React from 'react';
import HeroText from './HeroText';
import HeroSocialLinks from './HeroSocialLinks';
import HeroCodeSnippet from './HeroCodeSnippet';
import HeroFloatingElements from './HeroFloatingElements';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left side - Text content */}
        <div>
          <HeroText />
          <HeroSocialLinks />
        </div>

        {/* Right side - Code snippet */}
        <HeroCodeSnippet />
      </div>

      {/* Floating elements */}
      <HeroFloatingElements />
    </section>
  );
};

export default Hero;
