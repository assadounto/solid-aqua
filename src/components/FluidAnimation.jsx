// src/components/FluidAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FluidAnimation = () => {
  const fluidVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1.5, type: 'spring', damping: 10, stiffness: 100 } },
  };

  return (
    <motion.div
      className="bg-blue-500 w-full h-32 absolute bottom-0 left-0"
      variants={fluidVariants}
      initial="hidden"
      animate="visible"
    />
  );
};

export default FluidAnimation;
