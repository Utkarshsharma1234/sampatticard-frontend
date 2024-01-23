import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

  return (
    <div className='navbar-main'>
      <div className={`navbar-item`}>
        <Link to="/create_employer" className='nav-link' >
          Create Employer
        </Link>
      </div>
      <div className={`navbar-item`}>
        <Link to="/get_employer" className="nav-link" >
          Get Employer
        </Link>
      </div>
      <div className={`navbar-item`}>
        <Link to="/get_worker" className='nav-link' >
          Get Worker
        </Link>
      </div>
      <div className={`navbar-item`}>
        <Link to="/create_worker" className='nav-link'>
          Create Worker
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
