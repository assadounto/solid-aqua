// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FluidAnimation from '../components/FluidAnimation';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative bg-blue-500 h-screen flex flex-col items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <FluidAnimation />
      <div className="text-white text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Fluid Store</h1>
        <p className="text-lg">Quench your thirst with our refreshing fluids!</p>
        <motion.div variants={linkVariants} className="my-2">
          <Link to="/information" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            App Information
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} className="my-2">
          <Link to="/login" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} className="my-2">
          <Link to="/create-account" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Account
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
