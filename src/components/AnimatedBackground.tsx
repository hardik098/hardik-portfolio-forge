import React, { memo } from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  Server, 
  Globe, 
  GitBranch
} from 'lucide-react';

// Optimized animated background with minimal performance impact
const AnimatedBackground = memo(() => {
  const codeSnippets = [
    'const dev = { name: "Hardik" }',
    'return <Component />',
    'git commit -m "update"',
    'npm install'
  ];

  const icons = [
    { Icon: Code, color: 'text-blue-400/30' },
    { Icon: Terminal, color: 'text-green-400/30' },
    { Icon: Database, color: 'text-purple-400/30' },
    { Icon: Server, color: 'text-cyan-400/30' },
    { Icon: Globe, color: 'text-pink-400/30' },
    { Icon: GitBranch, color: 'text-yellow-400/30' }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Optimized CSS-only floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 4)}%`,
              top: `${10 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Minimal code snippets */}
      <div className="absolute inset-0 opacity-10">
        {codeSnippets.map((snippet, i) => (
          <div
            key={`code-${i}`}
            className="absolute font-mono text-xs text-emerald-400 animate-pulse"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${20 + (i * 15)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '4s'
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* Minimal floating icons */}
      <div className="absolute inset-0">
        {icons.map(({ Icon, color }, i) => (
          <div
            key={`icon-${i}`}
            className={`absolute ${color} animate-pulse`}
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${30 + (i * 10)}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '5s'
            }}
          >
            <Icon size={16} />
          </div>
        ))}
      </div>

      {/* CSS-only gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />

      {/* Simple geometric shapes */}
      <div 
        className="absolute top-1/2 left-1/2 w-20 h-20 border border-emerald-600/20 rotate-45 animate-spin"
        style={{ animationDuration: '30s' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-cyan-500/20 rounded-full animate-pulse"
        style={{ animationDuration: '4s' }}
      />
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;