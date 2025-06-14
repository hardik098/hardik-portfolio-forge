
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
  Settings
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
    { Icon: Settings, color: 'text-lime-400' }
  ];

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Enhanced Matrix-like code rain */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-sm font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['01010', '11001', 'DEBUG', 'EXEC', 'INIT', 'LOAD', 'RUN', 'END'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Moving Coding Icons */}
      {[...Array(20)].map((_, i) => {
        const randomIcon = codingIcons[Math.floor(Math.random() * codingIcons.length)];
        const IconComponent = randomIcon.Icon;
        
        return (
          <div
            key={`icon-${i}`}
            className={`absolute ${randomIcon.color} opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <IconComponent 
              size={24 + Math.random() * 16} 
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
      {[...Array(15)].map((_, i) => {
        const randomIcon = codingIcons[Math.floor(Math.random() * codingIcons.length)];
        const IconComponent = randomIcon.Icon;
        
        return (
          <div
            key={`floating-${i}`}
            className={`absolute ${randomIcon.color} opacity-15`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 4} ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <IconComponent size={20 + Math.random() * 12} />
          </div>
        );
      })}

      {/* Animated lightning effects */}
      <div className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-48 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-35 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Enhanced floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Floating code snippets */}
      <div className="absolute top-16 left-8 opacity-5 font-mono text-xs text-green-300 animate-pulse">
        {`import { useState } from 'react';\nconst [data, setData] = useState();`}
      </div>
      <div className="absolute bottom-32 right-16 opacity-5 font-mono text-xs text-blue-300 animate-pulse" style={{ animationDelay: '2s' }}>
        {`const response = await fetch('/api');\nreturn response.json();`}
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-green-600 rotate-45 opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border border-blue-600 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/5 w-16 h-16 border border-cyan-500 opacity-12 animate-bounce" style={{ animationDuration: '3s' }}></div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(5px) rotate(90deg); }
          50% { transform: translateY(-20px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-10px) translateX(-10px) rotate(270deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(-5px) translateX(-15px) rotate(240deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-25px) translateX(15px) rotate(180deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          20% { transform: translateY(-5px) translateX(-8px) rotate(72deg); }
          40% { transform: translateY(-15px) translateX(8px) rotate(144deg); }
          60% { transform: translateY(-20px) translateX(-5px) rotate(216deg); }
          80% { transform: translateY(-10px) translateX(12px) rotate(288deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
