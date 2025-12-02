import React from "react";
import './css/footer.css';
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";


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
        
        <p style={{ fontSize: "20px", color: "black", fontWeight: 600,marginTop: "-15px", }}>
  Phone: +91 9544952520
     </p>
     <p style={{ fontSize: "20px", color: "grey", fontWeight: 600, marginTop: "-15px",}}>Click here to check out about us !!!!!!</p>
      <div style={{ display: "flex", gap: "20px", fontSize: "30px" ,display: "flex",
    alignItems: "center",
    justifyContent: "center",marginTop: "-15px", }}>
  {/* WhatsApp */}
  
  <a 
    href="https://wa.me/919544952520" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "green" }}
  >
    <FaWhatsapp />
  </a>

  {/* Email */}
  <a 
    href="mailto:mahadevatraavels@gmail.com"
    style={{ color: "black" }}
  >
    <FaEnvelope />
  </a>

  {/* Instagram */}
  <a 
    href="https://instagram.com/varkala_mahadevatravels"
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "black" }}
  >
    <FaInstagram />
  </a>
</div>
      <div style={{height: "10px",}}>
      </div>
      <p style={{}}>© {new Date().getFullYear()} Madeva Tours & Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
