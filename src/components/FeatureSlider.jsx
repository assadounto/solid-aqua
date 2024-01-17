// src/components/FeatureSlider.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://placekitten.com/600/400',
  'https://placekitten.com/601/400',
  'https://placekitten.com/602/400',
];

const FeatureSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const sliderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };

  return (
    <motion.div
      className="md:w100 h-screen md:h-full flex flex-col items-center justify-center overflow-hidden"
      variants={sliderVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`Feature ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}

      />
    </motion.div>
  );
};

export default FeatureSlider;
