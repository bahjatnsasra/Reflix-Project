import React from 'react';
import { Link } from "react-router-dom";
import './LandingNav.css';

const reflixNavbar = ({budget}) => {
    return (
        <nav className="navbar">
            <div className="navbar-link">
                <Link to="/">Home</Link>
            </div>
            <div className="navbar-link">
                <Link to="/catalog">Catalog</Link>
            </div>
            <div className="logo">
                <Link to="">Reflix</Link>
            </div>
            <div className="navbar-link">
                {`${budget}$`}
            </div>
            
        </nav>
    );
}


export default reflixNavbar;
