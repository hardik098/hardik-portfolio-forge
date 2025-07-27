
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
        const newProgress = prev + Math.random() * 12; // Smoother progress updates
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        return newProgress;
      });
    }, 150); // Faster updates for smoother feel

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Terminal window - Much darker background */}
      <div className="bg-gray-950 border border-gray-800 rounded-lg max-w-md w-full mx-4 shadow-2xl"> {/* Changed from bg-gray-900 to bg-gray-950 */}
        {/* Terminal header - Much darker */}
        <div className="flex items-center gap-2 bg-gray-900 px-4 py-3 rounded-t-lg border-b border-gray-800"> {/* Changed from bg-gray-800 to bg-gray-900 */}
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
                <span className={`${index <= currentStep ? 'text-green-400' : 'text-gray-600'} transition-colors duration-200`}>
                  {step}
                </span>
                {index <= currentStep && (
                  <span className="text-green-400 ml-2">✓</span>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar - Enhanced animation */}
          <div className="mb-4">
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-right mt-2 text-gray-400">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Blinking cursor - Enhanced */}
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
