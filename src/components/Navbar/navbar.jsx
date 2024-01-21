import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
    <div className='navbar-main'>
        <div className="navbar-item">
            <Link to="/create_employer">Create Employer</Link>
        </div>
        <div className="navbar-item">
            <Link to="/get_employer">Get Employer</Link>
        </div>
        <div className="navbar-item">
            <Link to="/get_worker">Get Worker</Link>
        </div>
        <div className="navbar-item">
            <Link to="/create_worker">Create Worker</Link>
        </div>
        <div className="navbar-item">
            <Link to="/check_existing_worker">Check Existing Worker</Link>
        </div>
        <div className="navbar-item">
            <Link to="/login_employer">Login Employer</Link>
        </div>
        <div className="navbar-item">
            <Link to="/generate_contract">Generate Contract</Link>
        </div>
    </div>     
    </>
  )
}

export default navbar
