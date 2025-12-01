import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import Watapp from "../watapp";

const Districts = () => {
  const navigate = useNavigate();

  const districts = [
    "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam",
    "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram",
    "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
  ];

  const handleClick = (district) => {
    navigate(`/district/${district.toLowerCase()}`);
  };

  // Styles
  const styles = {
    page: {
      padding: "40px",
      minHeight: "100vh",
      textAlign: "center",
      backgroundImage: "url('/new.jpg')", // adjust path if using src/assets
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backdropFilter: "blur(2px)",
    },
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      padding: "30px",
      borderRadius: "12px",
      maxWidth: "1100px",
      margin: "0 auto",marginTop: "50px",
    },
    title: {
      fontWeight: "700",
      marginBottom: "30px",
      color: "#2c3e50",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
 
    },
    card: {
      background: "linear-gradient(135deg, #fff176, #ffd54f)",
      borderRadius: "12px",
      padding: "30px 20px",
      boxShadow: "0 5px 12px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      color: "#333",
      fontWeight: "600",
      fontSize: "1.1rem",
      
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <>
    <Navbar/>
    <div style={styles.page}>
      <div style={styles.overlay}>
        <h2 style={styles.title}>Explore Kerala by District</h2>
        <div style={styles.grid}>
          {districts.map((district, idx) => (
            <div
              key={idx}
              style={styles.card}
              onClick={() => handleClick(district)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
              }}
            >
              {district}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Watapp/>
    <Footer/>
    </>
  );
};

export default Districts;
