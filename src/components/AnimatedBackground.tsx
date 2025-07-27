
import React from 'react';
import { 
  Code, 
  Code2, 
  Terminal, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Braces, 
  FileCode, 
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Settings,
  Bug,
  Zap,
  Command,
  Hash
} from 'lucide-react';

const AnimatedBackground = () => {
  const codingIcons = [
    { Icon: Code, color: 'text-blue-400' },
    { Icon: Code2, color: 'text-green-400' },
    { Icon: Terminal, color: 'text-cyan-400' },
    { Icon: Database, color: 'text-purple-400' },
    { Icon: Server, color: 'text-orange-400' },
    { Icon: Globe, color: 'text-pink-400' },
    { Icon: GitBranch, color: 'text-yellow-400' },
    { Icon: Braces, color: 'text-red-400' },
    { Icon: FileCode, color: 'text-indigo-400' },
    { Icon: Monitor, color: 'text-teal-400' },
    { Icon: Cpu, color: 'text-emerald-400' },
    { Icon: HardDrive, color: 'text-violet-400' },
    { Icon: Wifi, color: 'text-sky-400' },
    { Icon: Settings, color: 'text-lime-400' },
    { Icon: Bug, color: 'text-rose-400' },
    { Icon: Zap, color: 'text-amber-400' },
    { Icon: Command, color: 'text-fuchsia-400' },
    { Icon: Hash, color: 'text-slate-400' }
  ];

  const codeTexts = [
    'console.log("Hello World")',
    'function(){',
    'import React from "react"',
    'const data = await fetch()',
    'git commit -m "fix"',
    'npm install',
    'return response.json()',
    'useEffect(() => {',
    'SELECT * FROM users',
    'docker run -p 3000:3000',
    'if (condition) {',
    'async/await',
    'try { } catch(e) { }',
    'export default',
    'API_KEY=secret',
    '.map(item => item.id)',
    'status: 200',
    'localhost:3000'
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Enhanced Matrix-like code rain with more visibility */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(80)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          >
            {['01010', '11001', 'DEBUG', 'EXEC', 'INIT', 'LOAD', 'RUN', 'END', 'API', 'JSON'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Floating code snippets with better visibility */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(25)].map((_, i) => (
          <div
            key={`code-${i}`}
            className="absolute font-mono text-xs text-cyan-400 animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`
            }}
          >
            {codeTexts[Math.floor(Math.random() * codeTexts.length)]}
          </div>
        ))}
      </div>

      {/* Moving Coding Icons with increased visibility */}
      {[...Array(35)].map((_, i) => {
        const randomIcon = codingIcons[Math.floor(Math.random() * codingIcons.length)];
        const IconComponent = randomIcon.Icon;
        
        return (
          <div
            key={`icon-${i}`}
            className={`absolute ${randomIcon.color} opacity-25 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <IconComponent 
              size={16 + Math.random() * 20} 
              className="animate-bounce"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          </div>
        );
      })}

      {/* Floating Programming Icons with Movement */}
      {[...Array(25)].map((_, i) => {
        const randomIcon = codingIcons[Math.floor(Math.random() * codingIcons.length)];
        const IconComponent = randomIcon.Icon;
        
        return (
          <div
            key={`floating-${i}`}
            className={`absolute ${randomIcon.color} opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <IconComponent size={18 + Math.random() * 14} />
          </div>
        );
      })}

      {/* Animated lightning effects */}
      <div className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Enhanced floating particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* More visible floating code snippets */}
      <div className="absolute top-16 left-8 opacity-15 font-mono text-sm text-green-300 animate-pulse">
        {`import { useState } from 'react';\nconst [data, setData] = useState();`}
      </div>
      <div className="absolute bottom-32 right-16 opacity-15 font-mono text-sm text-blue-300 animate-pulse" style={{ animationDelay: '2s' }}>
        {`const response = await fetch('/api');\nreturn response.json();`}
      </div>
      <div className="absolute top-1/3 left-16 opacity-12 font-mono text-xs text-purple-300 animate-pulse" style={{ animationDelay: '4s' }}>
        {`git add . && git commit -m "update"`}
      </div>
      <div className="absolute bottom-1/2 right-8 opacity-12 font-mono text-xs text-cyan-300 animate-pulse" style={{ animationDelay: '6s' }}>
        {`npm run build && npm start`}
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-green-600 rotate-45 opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-blue-600 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/5 w-16 h-16 border border-cyan-500 opacity-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
