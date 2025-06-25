
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Initializing modules...",
    "Loading dependencies...",
    "Compiling components...",
    "Starting development server..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 12 + 3; // Smoother increment
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        return newProgress;
      });
    }, 150); // Slightly faster updates for smoother feel

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Moving background code with optimizations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono opacity-15 will-change-transform animate-[float_2s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 30}px) translateZ(0)`,
            }}
          >
            {['01010', '11001', '{', '}', '()', '[]', '&&', '||', '==', '!=', '++', '--', '//', '/*', '*/', 'var', 'let', 'const', 'function', 'return'][Math.floor(Math.random() * 20)]}
          </div>
        ))}
      </div>

      {/* Terminal window with enhanced styling */}
      <div className="bg-gray-900/98 border border-gray-600/60 rounded-lg max-w-md w-full mx-4 shadow-2xl backdrop-blur-sm">
        {/* Terminal header with darker theme */}
        <div className="flex items-center gap-2 bg-gray-800/95 px-4 py-3 rounded-t-lg border-b border-gray-600/50">
          <div className="w-3 h-3 rounded-full bg-red-500/90 transition-all duration-300 hover:bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/90 transition-all duration-300 hover:bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/90 transition-all duration-300 hover:bg-green-400"></div>
          <span className="text-gray-200 font-mono text-sm ml-2 opacity-95">terminal@hardikanawala</span>
        </div>

        {/* Terminal content with smoother animations */}
        <div className="p-6 font-mono text-sm bg-gray-900/99">
          <div className="space-y-3 mb-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 transition-all duration-500 ease-out"
                style={{
                  transform: index <= currentStep ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: index <= currentStep ? 1 : 0.4,
                }}
              >
                <span className="text-green-400 opacity-90">$</span>
                <span className={`transition-all duration-300 ${index <= currentStep ? 'text-green-300' : 'text-gray-500'}`}>
                  {step}
                </span>
                {index <= currentStep && (
                  <span className="text-green-400 ml-2 animate-pulse">✓</span>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced progress bar */}
          <div className="mb-4">
            <div className="w-full h-3 bg-gray-700/80 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 transition-all duration-200 ease-out will-change-transform"
                style={{ 
                  width: `${progress}%`,
                  transform: 'translateZ(0)', // GPU acceleration
                }}
              />
            </div>
            <div className="text-right mt-2 text-gray-300 transition-all duration-300">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Enhanced blinking cursor */}
          <div className="flex items-center">
            <span className="text-green-400 opacity-90">$</span>
            <span className="text-green-400 ml-2 animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
