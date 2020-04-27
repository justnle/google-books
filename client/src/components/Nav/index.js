import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">
                Google Books
            </a>
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
