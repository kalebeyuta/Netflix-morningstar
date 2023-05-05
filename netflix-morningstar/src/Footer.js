import React from 'react';
import './css/Footer.css'; // import the Footer CSS file

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Netflix Clone by Your Name Here. This is a demo application and not affiliated with Netflix.
      </p>
      <div className="footer__links">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="footer__social">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Footer;
