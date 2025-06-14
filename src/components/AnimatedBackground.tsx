
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Matrix-like code rain */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-500 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['const', 'function', 'return', 'import', 'export', 'async', 'await', 'class', 'interface'][Math.floor(Math.random() * 9)]}
          </div>
        ))}
      </div>

      {/* Dark lightning effects */}
      <div className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-64 bg-gradient-to-b from-transparent via-green-600 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-b from-transparent via-blue-800 to-transparent opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Dark floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Dark code snippets floating */}
      <div className="absolute top-20 left-10 opacity-10 font-mono text-sm text-red-400 animate-pulse">
        {`function createApp() {\n  return <Portfolio />;\n}`}
      </div>
      <div className="absolute bottom-40 right-20 opacity-10 font-mono text-sm text-green-600 animate-pulse" style={{ animationDelay: '2s' }}>
        {`const skills = [\n  'React', 'Node.js',\n  '.NET', 'PostgreSQL'\n];`}
      </div>
      
      {/* Additional dark geometric shapes */}
      <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-red-800 rotate-45 opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-green-700 rounded-full opacity-25 animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;
