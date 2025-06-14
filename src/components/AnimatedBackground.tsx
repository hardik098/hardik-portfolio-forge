
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Matrix-like code rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['const', 'function', 'return', 'import', 'export', 'async', 'await', 'class', 'interface'][Math.floor(Math.random() * 9)]}
          </div>
        ))}
      </div>

      {/* Lightning effects */}
      <div className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-64 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Code snippets floating */}
      <div className="absolute top-20 left-10 opacity-5 font-mono text-sm text-emerald-400 animate-pulse">
        {`function createApp() {\n  return <Portfolio />;\n}`}
      </div>
      <div className="absolute bottom-40 right-20 opacity-5 font-mono text-sm text-cyan-400 animate-pulse" style={{ animationDelay: '2s' }}>
        {`const skills = [\n  'React', 'Node.js',\n  '.NET', 'PostgreSQL'\n];`}
      </div>
    </div>
  );
};

export default AnimatedBackground;
