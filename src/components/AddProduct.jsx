// src/components/AddProductPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsPlus } from 'react-icons/bs';
import axios from 'axios';

const AddProductPage = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', type: '' });

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    
    // Add validation logic if needed

    try {
      // Make an API request to your Rails backend to add the new product
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`, newProduct, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response from the backend (you may want to check for success or error status)
      console.log('Product added successfully:', response.data);

      // Pass the new product data to the parent component (Dashboard)
      onAddProduct(newProduct);

      // Clear the form fields
      setNewProduct({ name: '', type: '' });
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error adding product:', error);
    }
  };

  return (
    <motion.div
      className="bg-blue-500 h-screen p-4 md:p-8 overflow-y-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Add Fluid Product</h2>
        <form onSubmit={handleProductSubmit} className="bg-white p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <BsPlus className="text-blue-500" />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <BsPlus className="text-blue-500" />
            </div>
            <div>
              <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
                Product Type
              </label>
              <input
                type="text"
                id="productType"
                value={newProduct.type}
                onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
            Add Product
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default AddProductPage;
