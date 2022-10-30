import * as React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link className='logo-link' to='/'>
          <i className="fa-solid fa-database"></i>
        </Link>
        <p>SQL INJECTION APP</p>
      </div>
      <div className='search-container'>
        <SearchBar />
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
      <div className='login-container'>
        <p>Login</p>
      </div>
    </div>
  );
}

export default Header;
