import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className='navbar-brand' >Email Champion</Link> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/signup" className='nav-link'>Singup</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header