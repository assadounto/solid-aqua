// AdminLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


function Layout({ children }) {
  return (
    <div className='layout-container'>
        <div className='header-layout'>
<Header/>
        </div>
       <div className='sidebar-layout'>
       {/* <Sidebar/> */}
       </div>
       
      <div className="content-layout no-scrollbar">
        {children}
     
      </div>
    </div>
  );
}

export default Layout;
