import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand">
                Google Books
            </span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/saved">saved</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
