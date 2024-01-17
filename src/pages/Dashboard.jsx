// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GiWaterDrop } from 'react-icons/gi';
import { FaCube } from 'react-icons/fa';
import { NavLink, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import AddProductPage from '../components/AddProduct';
import ProductDetailContainer from '../components/ProductDetailcont';
import backendURL from '../constants';

const Dashboard = () => {
  const dashboardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`${backendURL}/api/v1/users/show`, {
          headers,
        });

        const userData = response.data;
        setUser(userData);
        setProducts(userData.products);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <motion.div
      className="bg-blue-500 h-screen p-4 md:p-8 overflow-y-scroll"
      variants={dashboardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Routes */}
      <Routes>
        <Route
          path="addProduct"
          element={<AddProductPage/>}
        />
        <Route path="customers" element={<div>{/* Customers Tab Content */}</div>} />
        <Route path="product/:productId" element={<ProductDetailContainer />} />
        <Route
          path="/*"
          element={
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Welcome, {user && user.name} {/* Display user name */}
              </h2>
              <h3 className="text-xl font-bold text-white mb-4">
                Fluid Products
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.length === 0 ? (
                  <div className="bg-white p-6 rounded-md shadow-md flex items-center justify-center">
                    <div className="mr-4">
                      <FaCube size={30} />
                    </div>
                    <div>
                      <p className="font-bold">No products available</p>
                    </div>
                  </div>
                ) : (
                  products.map((product) => (
                    <motion.div
                      key={product.id}
                      className="bg-white p-6 rounded-md shadow-md flex items-center justify-center"
                    >
                      <NavLink to={`/dashboard/product/${product.id}`}>
                        <div className="mr-4">{/* Add an icon for each product */}</div>
                        <div>
                          <p className="font-bold">{product.name}</p>
                          <p className="text-gray-600">{product.product_type}</p>
                        </div>
                      </NavLink>
                    </motion.div>
                  ))
                )}
              </div>
            </section>
          }
        />
      </Routes>
    </motion.div>
  );
};

export default Dashboard;
