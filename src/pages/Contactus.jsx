import Navbar from "./navbar";
import Footer from "./footer";
import images123 from "./images123.png";
import React, { useState, useEffect } from "react";
import ContactPopup from "./popup";
import ContactPopupi from "./popup2";

const ContactUs = () => {

  const [hovered, setHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  
  const baseStyle = {
    backgroundColor: hovered ? "#25D366" : "#ffffff",
    color: hovered ? "#ffffff" : "#000000",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #25D366",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  function handleButtonClick() {
    setOpen(true);
    console.log("clicked");
  }



  
  return (
    <>
    <Navbar/>
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          We'd love to hear from you! Whether you’re planning your next adventure or have a question about our services at <strong>Mahadeva Tours and Travels</strong>, just fill out the form below and we’ll get in touch with you shortly.
        </p>

        <div style={styles.iframeWrapper}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScJYh2On9a1-vRmZYdGvf7OtZVRs1idyk0CukkSxM1EkX47Ug/viewform?usp=dialog"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
            style={styles.iframe}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
   
  <div style={{
      display: "flex",          
    justifyContent: "center",  
    alignItems: "center",  
  }}> 
  <button style={baseStyle} onClick={handleButtonClick}
   onMouseEnter={() => setHovered(true)}
   onMouseLeave={() => setHovered(false)}
  >
  CONTACT
   </button>
  </div > 
  
    <ContactPopupi open={open}  setOpen={setOpen}/>

    <Footer/>
    </>
  );
};


const styles = {
  container123: {
    padding: "10px 20px",
    background: "#eee",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },

  container1234: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  container12: {
    width: "40px",
    height: "40px",
  },

  container1: {
    fontSize: "16px",
    fontWeight: "bold",
  },

  /* Popup Overlay */
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  /* Popup Box */
  popup: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    minWidth: "250px",
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  whatsapp: {
    padding: "12px",
    background: "#25D366",
    color: "#fff",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
  },

  instagram: {
    padding: "12px",
    background: "#E1306C",
    color: "#fff",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
  },

  email: {
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
  },

  container123: {
    padding: "10px 20px",
    background: "#eee",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },

  container1234: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  container12: {
    width: "40px",
    height: "40px",
  },

  container1: {
    fontSize: "16px",
    fontWeight: "bold",
  },

   openBtn: {
    backgroundColor: "#1cd469ff",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
  },
};


export default ContactUs;


