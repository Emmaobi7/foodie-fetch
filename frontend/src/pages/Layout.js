import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
       <>
          <Helmet>
            <title>foodie-fetch ecommerce store</title>
          </Helmet>
          <header>
            <Navbar />
          </header>
          <main className="main-container">
            {/* {children} */}
            <Outlet />
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </>
    </div>
  )
}

export default Layout;