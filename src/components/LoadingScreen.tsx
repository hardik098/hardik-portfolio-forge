
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Matrix-like background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Loading content */}
      <div className="text-center z-10">
        <div className="mb-8">
          <div className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Initializing...
            </span>
          </div>
          
          {/* Terminal-like loading */}
          <div className="bg-black border border-green-500 rounded-lg p-4 font-mono text-left max-w-md mx-auto">
            <div className="text-green-400 text-sm space-y-1">
              <div className="animate-pulse">$ npm start</div>
              <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>Loading dependencies...</div>
              <div className="animate-pulse" style={{ animationDelay: '1s' }}>Compiling components...</div>
              <div className="animate-pulse" style={{ animationDelay: '1.5s' }}>Starting development server...</div>
              <div className="flex items-center animate-pulse" style={{ animationDelay: '2s' }}>
                <span>Ready on </span>
                <span className="text-cyan-400 ml-1">localhost:3000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full animate-pulse origin-left transform scale-x-0 animate-[scale-x_3s_ease-in-out_forwards]"></div>
        </div>
        
        {/* Blinking cursor */}
        <div className="mt-4 text-green-400 text-xl animate-ping">_</div>
      </div>

      {/* Floating code elements */}
      <div className="absolute top-1/4 left-1/4 text-emerald-400 font-mono text-xs opacity-30 animate-bounce">
        &lt;html&gt;
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-cyan-400 font-mono text-xs opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
        function()
      </div>
      <div className="absolute top-1/3 right-1/3 text-green-400 font-mono text-xs opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}>
        {`{ }`}
      </div>
    </div>
  );
};

export default LoadingScreen;
