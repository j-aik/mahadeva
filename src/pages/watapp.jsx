import React, { useState } from "react";
import images123 from "./images123.png";


const Watapp = () => {
  const [hovered, setHovered] = useState(false);

  // ✅ define the styles first
  const styles = {
    container123: {
       position: "fixed",        // ✅ stays in place when scrolling
      bottom: "25px",           // ✅ distance from bottom
      left: "25px",
      border: "none",
      backgroundColor: hovered ? "#25D366" : "white", 
      transform: hovered ? "scale(1.15)" : "scale(1)",
      border: "3px solid #25D366",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "800",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      color: hovered ? "white" : "#25D366", 
      maxHeight: "70px", 
     
    },


    container12:{
     display:"flex",
      flexDirection: "row", 
     justifyContent: "center",
     alignItems: "center",
     maxHeight: "80px",
     borderRadius: "50%",
     backgroundColor: hovered ? "#25D366" : "white", 
     maxHeight: "50px",
  },
  };

  // ✅ then return JSX
  return (
    <button
      style={styles.container123}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open("https://wa.me/919544952520", "_blank")}
    >
     <img src={images123}  style={styles.container12} />
    </button>
  );
};

export default Watapp;