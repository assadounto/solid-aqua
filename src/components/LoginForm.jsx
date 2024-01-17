import React, { useState } from 'react';
import axios from 'axios';
import backendURL from '../constants';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true); // Set loading state to true
      const response = await axios.post(`${backendURL}/api/v1/login`, {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);

      // Navigate to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);

      if (error.response) {
        const { error: serverError } = error.response.data;
        setError(serverError);
      } else if (error.request) {
        setError('No response from the server. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  return (
    <div className="flex flex-col items-center bg-blue-500 p-6 rounded-md">
      <div className="mb-4">
        <label className="text-white text-lg block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-3 py-2 rounded-md bg-white text-blue-900 focus:outline-none focus:shadow-outline-blue"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label className="text-white text-lg block mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-3 py-2 rounded-md bg-white text-blue-900 focus:outline-none focus:shadow-outline-blue"
          placeholder="Your password"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue relative"
      >
        {loading && (
          <FaSpinner className="animate-spin absolute top-1/2 left-1/2 -mt-3 -ml-3" />
        )}
        Login
      </button>
    </div>
  );
};

export default LoginForm;
