// src/components/Login.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FeatureSlider from '../components/FeatureSlider';
import LoginForm from '../components/LoginForm';
import CreateAccountForm from '../components/CreateAccountForm';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const toggleForm = () => {
    setIsLoginForm((prevValue) => !prevValue);
  };

  return (
    <motion.div
      className="bg-blue-500 h-screen flex flex-col md:flex-row items-center justify-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* FeatureSlider taking half of the login page on larger screens */}
      <div className="hidden md:block md:w-1/2 h-full flex items-center justify-center">
        <FeatureSlider />
      </div>

      {/* Render either LoginForm or CreateAccountForm based on the current state */}
      <div className="md:w-1/2 p-4 w-full">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            {isLoginForm ? 'Login' : 'Create Account'}
          </h1>
          {isLoginForm ? <LoginForm /> : <CreateAccountForm />}
          <p className="text-blue-200 cursor-pointer hover:underline" onClick={toggleForm}>
            {isLoginForm ? 'Create an account' : 'Already have an account? Login'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
