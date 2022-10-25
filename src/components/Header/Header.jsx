import * as React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <i className="fa-solid fa-database"></i>
        <p>SQL INJECTION APP</p>
      </div>
      <nav className='menu-container'>
        <ul>
          <li>
            <Link className='link' to='/products?category=Skate'>
              Skate
            </Link>
          </li>
          <li> 
            <Link className='link' to='/products?category=Longboard'>
              Longboard
            </Link>
          </li>
          <li>
            <Link className='link' to='/products?category=Surfskate'>
              Surfskate
            </Link>
          </li>
          <li className='link'>
            <Link className='link' to='/products?category=Cruiser'>
              Cruiser
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
