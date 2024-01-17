// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ProductDetailContainer from './components/ProductDetailcont';
import AddProductPage from './components/AddProduct';
function App() {
  const Authenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       

    
        <Route path="/create-account" element={<CreateAccount />} />
        <Route  path="/dashboard/*"
        element={<PrivateRoute
         
          element={
            <Layout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="product/:productId" element={<ProductDetailContainer />} />
                <Route path="addproduct" element={<AddProductPage />} />
              </Routes>
            </Layout>
          }
          isAuthenticated={Authenticated}
        />}
        >
        
            </Route>
      </Routes>
    </Router>
  );
}

export default App;
