// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import '../grid.css';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout');
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setIsLoggedIn(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <header className="header header--fixed">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <i className="logoo">Yellow Helmet</i>
          </Link>
          <nav className="raising-nav">
            <ul className="raising-menu">
              <li><Link to="/">Home</Link></li>
              <li><a href="#id2">About</a></li>
              <li><a href="#id3">Service</a></li>
              <li><a href="#id7">Contact Us</a></li>
              <li><Link to="/users">Engineers</Link></li>
              <li><Link to="/project">Projects</Link></li>
              {isLoggedIn ? (
                <>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                </>
              )}
            </ul>
          </nav>
          <div className="btn-right">
            <div className="search-btn"><i className="fa fa-search"></i></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
