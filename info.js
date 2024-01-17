// src/components/ProductDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import _ from 'lodash';

const ProductDetailContainer = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [product, setProduct] = useState({
    id: 1,
    name: 'Clean Water',
    type: 'Liquid',
  });

  const [formData, setFormData] = useState({
    customer: '',
    mobile: '',
    amount: '',
  });
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2022-01-01', amount: 10, customer: 'John Doe', mobile: '123-456-7890' },
    { id: 2, date: '2022-01-05', amount: 15, customer: 'Jane Smith', mobile: '987-654-3210' },
    // Add more transactions as needed
  ]);

  const [sortBy, setSortBy] = useState('date'); // 'date', 'amount', 'customer'
  const [filterBy, setFilterBy] = useState('all'); // 'all', 'today'

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const sortTransactions = (transactions) => {
    return _.orderBy(transactions, sortBy, 'desc');
  };



  const filterTransactions = (transactions) => {
    if (filterBy === 'today') {
      const today = new Date().toISOString().split('T')[0];
      return transactions.filter((transaction) => transaction.date.includes(today));
    }
    return transactions;
  };

    // Function to handle opening the modal
    const openModal = () => {
        setShowModal(true);
      };
    
      // Function to handle closing the modal
      const closeModal = () => {
        setShowModal(false);
      };
    
      // Function to handle form input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleAddTransaction = (e) => {
        e.preventDefault();
    
        // Simulate adding a new transaction with the form data
        const newTransaction = {
          id: transactions.length + 1,
          date: new Date().toISOString(),
          amount: parseFloat(formData.amount),
          customer: formData.customer,
          mobile: formData.mobile,
        };
    
        setTransactions([...transactions, newTransaction]);
        closeModal(); // Close the modal after adding the transaction
      };
    
  const sortedTransactions = sortTransactions(transactions);
  const filteredTransactions = filterTransactions(sortedTransactions);

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Total Transactions',
        data: [12, 19, 3, 5, 2, 3, 11],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-lg p-8 bg-white rounded-md shadow-md mt-8">
      <h2>{product.name} Details</h2>
      <p>Product ID: {product.id}</p>
      <p>Type: {product.type}</p>

      {/* Sorting and Filtering Controls */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <label className="mr-2">Sort By:</label>
          <select value={sortBy} onChange={handleSortChange} className="p-2 border rounded">
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Filter By:</label>
          <select value={filterBy} onChange={handleFilterChange} className="p-2 border rounded">
            <option value="all">All</option>
            <option value="today">Today</option>
          </select>
        </div>
      </div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white p-2 rounded flex items-center"
      >
        <FaPlus className="mr-2" />
        Add Transaction
      </button>

 {/* Transaction Modal */}
 {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
            <form onSubmit={handleAddTransaction}>
              <div className="mb-4">
                <label htmlFor="customer" className="block text-sm font-medium text-gray-600">
                  Customer Name:
                </label>
                <input
                  type="text"
                  id="customer"
                  name="customer"
                  value={formData.customer}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
                  Transaction Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Add Transaction
              </button>
            </form>
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white p-2 rounded mt-4 hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Transactions List */}
      <ul className="list-none p-0">
        {filteredTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className="border-b border-gray-300 py-2 flex justify-between items-center"
          >
            <div className="flex flex-col">
              <strong className="text-lg">{transaction.customer}</strong>
              <p className="text-gray-500 text-sm">{transaction.mobile}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">
                ${transaction.amount.toFixed(2)} on{' '}
                {new Date(transaction.date).toLocaleDateString()}
              </p>
              {/* Additional information can be added */}
            </div>
          </li>
        ))}
      </ul>

      {/* Analytics Section */}
      <h3 className="text-xl font-bold mt-6 mb-3">Analytics</h3>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600">Total Transactions: {transactions.length}</p>
          <p className="text-gray-600">
            Total Customers: {_.uniq(transactions.map((t) => t.customer)).length}
          </p>
        </div>
        {/* Additional analytics information can be added as needed */}
      </div>

      {/* Chart */}
     
    </div>
  );
};

export default ProductDetailContainer;
