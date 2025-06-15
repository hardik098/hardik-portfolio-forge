
import React from 'react';
import { motion } from 'framer-motion';

// Bubble configuration: smoother, natural movement, fewer elements for perf
const floatingBubbles = [
  { id: 1, size: 56, left: '12%', top: '20%', duration: 13, delay: 0, xMagnitude: 16, yMagnitude: 12 },
  { id: 2, size: 72, left: '72%', top: '35%', duration: 18, delay: 1.5, xMagnitude: 12, yMagnitude: 18 },
  { id: 3, size: 40, left: '35%', top: '70%', duration: 15, delay: 2.1, xMagnitude: 8, yMagnitude: 7 },
  { id: 4, size: 64, left: '58%', top: '55%', duration: 19, delay: 3.3, xMagnitude: 13, yMagnitude: 10 },
];
// Colors are purposefully subtle for background

const FloatingElements = () => (
  <>
    <div className="absolute inset-0 pointer-events-none z-0">
      {floatingBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: bubble.left,
            top: bubble.top,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background:
              "radial-gradient(circle at 30% 60%, rgba(34,212,238,0.17) 0%, rgba(155,0,255,0.14) 100%)",
            opacity: 0.13,
            filter: "blur(2.5px)",
          }}
          animate={{
            x: [
              0,
              bubble.xMagnitude,
              0,
              -bubble.xMagnitude,
              0
            ],
            y: [
              0,
              -bubble.yMagnitude,
              0,
              bubble.yMagnitude,
              0
            ],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
    {/* Only one large gradient orb per corner for ambient effect */}
    <div className="absolute top-0 left-1/4 w-56 h-56 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none z-0" />
    <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl pointer-events-none z-0" />
  </>
);

export default FloatingElements;
