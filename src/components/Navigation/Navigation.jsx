// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const handleClick = () => {
    const element = document.getElementById('create-events-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find-events">Find Events</Link>
        </li>
        <li>
          <span onClick={handleClick} id='span'>Create Events</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
