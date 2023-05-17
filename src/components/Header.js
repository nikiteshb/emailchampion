import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../store/Slices/AuthSlice';
 
function Header() { 
    const loggedinuser = useSelector((state) => state.auth)
    const dispatch = useDispatch();
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
                        {loggedinuser.isLoggedIn ? <div className='nav-link'>hello {loggedinuser.name}</div> : null}
                    </li>
                    <li className='nav-item'>
                        {loggedinuser.isLoggedIn ? <Link to="/" className='nav-link' onClick={() => dispatch(logout())}>Logout</Link> :null }
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header