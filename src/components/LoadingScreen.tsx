
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
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Moving background code */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translateY(${Math.sin(Date.now() * 0.001 + i) * 50}px)`
            }}
          >
            {['01010', '11001', '{', '}', '()', '[]', '&&', '||', '==', '!=', '++', '--', '//', '/*', '*/', 'var', 'let', 'const', 'function', 'return'][Math.floor(Math.random() * 20)]}
          </div>
        ))}
      </div>

      {/* Terminal window */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-md w-full mx-4 shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-300 font-mono text-sm ml-2">terminal@hardikanawala</span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm">
          <div className="space-y-2 mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className={`${index <= currentStep ? 'text-green-400' : 'text-gray-600'}`}>
                  {step}
                </span>
                {index <= currentStep && (
                  <span className="text-green-400 ml-2">✓</span>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-right mt-2 text-gray-400">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Blinking cursor */}
          <div className="flex items-center">
            <span className="text-green-400">$</span>
            <span className="text-green-400 ml-2 animate-ping">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
