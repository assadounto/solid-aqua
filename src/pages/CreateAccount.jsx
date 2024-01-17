// src/components/CreateAccount.jsx
import React from 'react';
import { motion } from 'framer-motion';
import FeatureSlider from '../components/FeatureSlider';
import CreateAccountForm from '../components/CreateAccountForm';

const CreateAccount = () => {
  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-blue-500 h-screen flex flex-col md:flex-row items-center justify-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* FeatureSlider taking half of the create account page on larger screens */}
      <div className="hidden md:block md:w-1/2 h-full flex items-center justify-center">
        <FeatureSlider />
      </div>

      {/* CreateAccountForm taking the entire width on smaller screens, half on larger screens */}
      <div className="md:w-1/2 p-4 w-full">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Create Account</h1>
          <CreateAccountForm />
        </div>
      </div>
    </motion.div>
  );
};

export default CreateAccount;
