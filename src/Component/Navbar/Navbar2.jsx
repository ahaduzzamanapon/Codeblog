// Navbar2.js

import { useState, useEffect } from "react";
import './nav2.css';

const Navbar2 = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [isMenuVisible, setMenuVisible] = useState(width <= 728);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      // Update menu visibility based on width
      setMenuVisible(newWidth >= 728);
      setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const handleDrawerClick = () => {
    setMenuOpen((prevOpen) => !prevOpen);

  };
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };
  const handleOutsideClick = (event) => {
      // Check if the click is outside the drawer
      if (menuOpen && !event.target.closest('.menu-icon')) {
          console.log(menuOpen);
          setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document body
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);


  return (
    <div>
      {width >= 728 ? (
        <ul className={`s-ul ${isMenuVisible ? 'visible' : 'hidden'}`}>
          <li>HTML</li>
          <li>CSS</li>
          <li>C++</li>
          <li>PHP</li>
          <li>REACT</li>
          <li>JAVA SCRIPT</li>
          <li>LARAVEL</li>
          <li>CODEIGNITER</li>
        </ul>
      ) : (
        <ul className={`s-ul ${isMenuVisible ? 'visible menu-icon' : 'hidden'}`} onClick={handleDrawerClick}>
          <i className="fas fa-bars"></i>
        </ul>
      )}
      {menuOpen && (
      <div className={`drawer ${menuOpen ? 'visible' : ''}`}>
      <div className="drawer-container">
            <ul>
              <li  onClick={handleMenuItemClick} >HTML</li>
              <li  onClick={handleMenuItemClick} >CSS</li>
              <li  onClick={handleMenuItemClick} >C++</li>
              <li  onClick={handleMenuItemClick} >PHP</li>
              <li  onClick={handleMenuItemClick} >REACT</li>
              <li  onClick={handleMenuItemClick} >JAVA SCRIPT</li>
              <li  onClick={handleMenuItemClick} >LARAVEL</li>
              <li  onClick={handleMenuItemClick} >CODEIGNITER</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
