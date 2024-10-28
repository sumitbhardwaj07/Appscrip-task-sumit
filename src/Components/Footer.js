import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="currency">
          <h4>CONTACT US</h4>
          <p>+91 1234567890</p>
          <p>abc@example.com</p>
          <h4>CURRENCY</h4>
          <p><span >🇺🇸</span> USD</p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <ul>
          <h4>metta muse</h4>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
            </ul>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
