// Import the necessary dependencies
import React, { useState } from 'react';
import './mobilecss.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar2 from "./Navbar2";

function Navbar1Mobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = [
    { id: 0, text: 'Home', icon: 'home-outline', faIcon: 'fas fa-home' },
    { id: 1, text: 'Profile', icon: 'person-outline', faIcon: 'fas fa-user' },
    { id: 2, text: 'Messages', icon: 'chatbubble-outline', faIcon: 'fas fa-comment' },
    { id: 3, text: 'Help', icon: 'information-circle-outline', faIcon: 'fas fa-info-circle' },
    { id: 4, text: 'Settings', icon: 'settings-outline', faIcon: 'fas fa-cog' },
  ];
  var logo='</> CodingWithApon'

  return (
    <React.Fragment>
      <div className='col-md-12 top_heder'>
        <a className="navbar-brand" target="_blank">
          <h3 className='logo'> {logo} </h3>
        </a>
      </div>
      <Navbar2 />


      <nav className='navm'>
        <div className="nav-box">
          <ul className="nav-container">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav__item ${activeIndex === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                <a href={`#${item.text}`} className="nav__item-link">
                  <div className="nav__item-icon">
                      <i className={item.faIcon}></i>
                  </div>
                  <span className="nav__item-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar1Mobile;
