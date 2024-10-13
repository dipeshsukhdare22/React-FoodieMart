import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/cartlogo.png';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg container-fluid" data-bs-theme="bg-dark-subtle">
            <div className="container-fluid d-flex align-items-center justify-content-center py-10 border-bottom border-dark">
                <Link className="navbar-brand d-flex align-items-center text-dark text-decoration-none" to="/">
                    <span className='badge fs-4' style={{ backgroundColor: '#f58f47', color: '#333333' }}>
                        <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} /> FoodieMart
                    </span>
                </Link>

                {/* Toggler for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12 col-md-auto justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/review">Review</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="icons navbar-search-icon">
                        <div className='dot'>
                            <img src={require('../assets/Images/cart.png')} alt="Cart" />
                        </div>
                    </div>
                    <button className='btn1'>Sign in</button>
                </div>
            </div>
        </nav>
    );
};
