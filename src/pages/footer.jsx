import React from "react";
import './css/footer.css';



const Footer = () => {
  return (
    <footer className="footer-light">
      <div className="footer-top">
        <h2 className="footer-logo" style={{ fontSize: "30px", fontWeight: 600 }}>Mahadeva <span>Tours & Travels</span></h2>
        <p className="footer-tagline">
          Explore the soul of Kerala — comfort, culture, and care.
        </p>
      </div>

      {/* <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact Us</a>
      </div> */}

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Madeva Tours & Travels. All rights reserved.</p>
        <p style={{ fontSize: "20px", color: "black", fontWeight: 600 }}>
  Phone: +91 9544952520
     </p>
      </div>
    </footer>
  );
};

export default Footer;
