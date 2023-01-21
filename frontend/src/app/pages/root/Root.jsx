import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Root() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="content min-h-screen" id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
