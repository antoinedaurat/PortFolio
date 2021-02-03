import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header>
    <nav className="navbar" role="navigation">
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="#about" className="navbar-item">
            About me
          </Link>{' '}
          <Link to="#timeline" className="navbar-item">
            Timeline
          </Link>{' '}
          <Link to="#projects" className="navbar-item">
            Highlights
          </Link>{' '}
          <Link to="#skills" className="navbar-item">
            Coding Skills
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
