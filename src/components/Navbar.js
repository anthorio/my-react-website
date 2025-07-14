import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const checkAuthStatus = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('userData');
    
    setIsLoggedIn(loggedIn);
    if (userData) {
      setUser(JSON.parse(userData));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUser(null);
    closeMobileMenu();
    history.push('/');
  };

  const handleDashboard = () => {
    closeMobileMenu();
    history.push('/dashboard');
  };

  const handleLogin = () => {
    closeMobileMenu();
    history.push('/login');
  };

  useEffect(() => {
    showButton();
    checkAuthStatus();
  }, []);

  // Check auth status on route changes
  useEffect(() => {
    const interval = setInterval(checkAuthStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            {isLoggedIn && (
              <li className='nav-item'>
                <Link
                  to='/dashboard'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <button
                  className='nav-links-mobile logout-mobile'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
          
          {button && !isLoggedIn && (
            <div className='auth-buttons'>
              <Button buttonStyle='btn--outline--alt' onClick={handleLogin}>
                LOGIN
              </Button>
              <Button buttonStyle='btn--outline'>SIGN UP</Button>
            </div>
          )}
          
          {button && isLoggedIn && (
            <div className='user-menu'>
              <button className='user-profile' onClick={handleDashboard}>
                <span className='user-avatar'>
                  {user?.firstName?.charAt(0) || 'U'}
                </span>
                <span className='user-name'>
                  {user?.firstName || 'User'}
                </span>
              </button>
              <button className='logout-btn' onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
