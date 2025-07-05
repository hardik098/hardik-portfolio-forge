import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Star } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume to the public folder
    link.download = 'Hardik_Anawala_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="group relative inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.button
        onClick={handleDownload}
        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
        whileHover={{
          boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.4)"
        }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            x: [-100, 100],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-20"></div>
        
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative z-10"
        >
          <Download className="w-5 h-5" />
        </motion.div>
        
        <span className="relative z-10">Download Resume</span>
        
        <motion.div
          className="flex items-center gap-1 relative z-10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FileText className="w-4 h-4" />
          <span className="text-xs opacity-75">PDF</span>
        </motion.div>
        
        {/* Floating stars */}
        <motion.div
          className="absolute -top-1 -right-1 text-yellow-300"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-4 h-4 fill-current" />
        </motion.div>
      </motion.button>
      
      {/* Tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        <span>View my complete profile</span>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeDownload;