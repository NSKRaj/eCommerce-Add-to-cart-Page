import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import './Navbar.css';
import logo from '../assets/logo.png'; 

export const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='logo'>
              <Link to="/">
                  <img src={logo} alt=''/>
              </Link>
          </div>
          <div className='links'>
              <Link to="/"> SHOP </Link>
              <Link to="/cart">
                  <FaCartShopping size={32} />
              </Link>
    
          </div>
      </div>
  );
};

export default Navbar;
