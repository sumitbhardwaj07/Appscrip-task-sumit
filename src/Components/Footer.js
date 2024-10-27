import React from 'react';
import './Footer.css';

const Footer = ()=> {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo" style={{color:"white"}}>LOGO</div>
        <div className="links">
          <a href="/shop">SHOP</a>
          <a href="/skills">SKILLS</a>
          <a href="/stories">STORIES</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT US</a>
        </div>
        <div className="socials">
          <a href="https://facebook.com" >Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com" >Instagram</a>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2024 Logo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
