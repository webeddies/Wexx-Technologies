import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // signal HomePage to show main content
    }, 2500); // Duration of preloader
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-teal-400 tracking-wide drop-shadow animate-pulse"

          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
          }}
        >
          WEXX
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
