// src/components/ProductDetailPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProductDetailPage = ({ selectedProduct, transactions, onAddTransaction }) => {
  return (
    <motion.div
      className="bg-blue-500 h-screen p-4 md:p-8 overflow-y-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Transactions for {selectedProduct.name}
        </h2>
        <div className="bg-white p-6 rounded-md shadow-md">
          {/* Display transactions */}
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id} className="mb-2">
                Date: {transaction.date}, Amount: {transaction.amount}
              </li>
            ))}
          </ul>
          {/* Button to add a new transaction */}
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={onAddTransaction}
          >
            Add Transaction
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetailPage;
