import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="row">
      <div>  
        <ul className="dropdown">
        <div className="logo">
          <h1>DDS</h1>
          <p>Driver Drowsiness Deduction System</p>
        </div>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>Insights<i className="fas fa-caret-down"></i></Link>
            <ul className="product">
              <li><Link to='/contact'>Mobile Devices</Link></li>
              <li><Link to='/about'>Browsing Insights<i className="fas fa-caret-right"></i></Link>
                <ul className="laptop">
                  <li><Link to='/about'>Data Duration</Link></li>
                  <li><Link to='/datapage'>View Data Table</Link></li>
                </ul>
              </li>
              <li><Link to='/about'>Desktop Devices</Link></li>
            </ul>
          </li>
          <Link to='/' className='btn btn-default border  text-white text-decoration-none'>Logout</Link>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
