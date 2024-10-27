import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
          <a href="/">SHOP</a>
          <a href="/skills">SKILLS</a>
          <a href="/stories">STORIES</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT US</a>
      </nav>
    </header>
  );
}

export default Header;
