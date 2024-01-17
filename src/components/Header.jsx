// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500">
      <div>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            `text-white mr-4 font-bold text-lg hover:text-gray-300 ${
              isActive ? 'border-b-2 border-white' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard/addProduct"
          className={({ isActive, isPending }) =>
            `text-white mr-4 font-bold text-lg hover:text-gray-300 ${
              isActive ? 'border-b-2 border-white' : ''
            }`
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to="/dashboard/customers"
          className={({ isActive, isPending }) =>
            `text-white font-bold text-lg hover:text-gray-300 ${
              isActive ? 'border-b-2 border-white' : ''
            }`
          }
        >
          Customers
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
