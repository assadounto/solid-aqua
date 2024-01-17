// src/components/CreateAccountForm.jsx
import React from 'react';

const CreateAccountForm = () => {
  return (
    <form className="flex flex-col items-center">
      <div className="mb-4">
        <label className="text-white text-lg block mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 rounded-md bg-blue-100 text-blue-900"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label className="text-white text-lg block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 rounded-md bg-blue-100 text-blue-900"
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
          className="w-full px-3 py-2 rounded-md bg-blue-100 text-blue-900"
          placeholder="Your password"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountForm;
