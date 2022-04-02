import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome TO t-shirt mania</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/orderreview'>OrderReview</Link>
                <Link to='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;