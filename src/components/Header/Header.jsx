// src/components/Header.js
import React from 'react';
import Navbar from '../Navbar'
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1>My First React App</h1>
      <Navbar />
    </header>
  );
};

export default Header;
