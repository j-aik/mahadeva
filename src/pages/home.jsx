import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Footer from "./footer";
import ContactPopup from "./popup";

import Alappuzhabeach from "../images/Alappuzhabeach.jpeg";
import varkala  from "../images/2.jpeg";
import t from "../images/3.jpeg";
import t2 from "../images/4.jpeg";
import t3 from "../images/5.jpeg";
import w1 from "../images/w1.jpg";
import w2 from "../images/w2.jpg";
import w3 from "../images/w3.jpg";
import w4 from "../images/w4.jpg";
import w5 from "../images/w5.jpg";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import m5 from "../images/m5.jpg";
import Watapp from "./watapp";




function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);

  

  

  const images = [
    Alappuzhabeach,
    varkala,
    t,
    t2,
    t3
  ];

  const images1 = [
    w1,
    w2,
    w3,
    w4,
    w5
  ];

  const images2 = [
    m1,
    m2,
    m3,
    m4,
    m5
  ];



  console.log(images)

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    console.log(index)
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };


  function closeContactPop() {
  setContactOpen(false);
  }

  return (
    <>
    <div className="position-relative vh-100 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover", zIndex: 0 }}
      >
        <source src="/waterfall.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center bg-dark bg-opacity-50"
        style={{ zIndex: 1 }}
      >
        <h1
          className="h1 fw-bold fade-in-title"
          style={{
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            letterSpacing: "1px",
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
          }}
        >
          Mahadeva Tours & Travels
        </h1>

        <p className="lead mb-4">Explore the beauty of Kerala with us!</p>
        <Link to={"/district"}><button className="btn btn-warning px-4 py-2 fw-semibold">
          Explore Now
        </button></Link>
      </div>

      {/* Menu Button */}
<button
  className="btn btn-light shadow"
  style={{
    position: "fixed",
    top: "0",
    right: "0",
    margin: "1rem",
    zIndex: 2,
  }}
    onClick={() => setMenuOpen(true)}
>
        ☰ Menu
      </button>

      {/* Sidebar */}
      {menuOpen && (
        <div
          className="position-fixed top-0 end-0 h-100 bg-light text-dark p-4 shadow"
          style={{ width: "260px", zIndex: 3 }}
        >
          <div className="position-relative mb-5">
            <button
              className="btn btn-close btn-close-dark position-absolute top-0 end-0"
              onClick={() => setMenuOpen(false)}
            ></button>
          </div>
          <ul className="list-unstyled">
            <li className="mb-3">
              <Link
                to="/"
                className="btn btn-outline-dark w-100"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link
                to="/district"
                                className="btn btn-outline-dark w-100"

                onClick={() => setMenuOpen(false)}
              >
                Districts
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="btn btn-outline-dark w-100"
               
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
    

    {/* <ContactPopup open={contactOpen}
     onClose={closeContactPop} /> */}

{/* <div style={{
  background: "rgba(80, 80, 80, 0.5)",
  height:"8px",
}}>
  
</div>

<div style={{
  fontSize: "32px",
  fontWeight: "700",
  fontFamily: "Poppins, sans-serif",
  textAlign: "center",
  letterSpacing: "1px",
  background: "rgba(80, 80, 80, 0.5)"
}}>
  TOP PLACES TO VISIT
</div>

{/* row for the beaches starting here  */}
{/* <div style={{
  background: "rgba(80, 80, 80, 0.5)",
  height:"8px",
}}>

</div>

<div
  style={{
     display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    overflowX: "scroll",
    paddingBottom: "10px",
    scrollSnapType: "x mandatory",
    background: "rgba(80, 80, 80, 0.5)"
  }}
>

  <div style={{
  position: "relative",
  width: "200px",
  height:"400px",
  borderRadius: "10px",
  overflow: "hidden", 
  marginLeft:"2%",
  minHeight: "20vh",    
  maxHeight: "50vh",
}}>

   
    <img src={images[index]} alt="auto" 
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "0.3s",
      zIndex: 0,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";}}

    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";}}
  />
     <div style={{
       position: "absolute",
       bottom:"0px",
    width: "100%",
    height: "50px",

    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    
              }}>
       <h1 className="text-2xl font-bold" style={{ color:"white"}}>Beaches</h1>
     </div>
</div>

  <div style={{
  position: "relative",
  width: "200px",
  height:"400px",
  borderRadius: "10px",
  overflow: "hidden", 
  marginLeft:"2%",
  minHeight: "20vh",    
  maxHeight: "50vh",
}}>

   
    <img src={images1[index]} alt="auto" 
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "0.3s",
      zIndex: 0,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";}}

    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";}}
  />
     <div style={{
       position: "absolute",
       bottom:"0px",
    width: "100%",
    height: "50px",

    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    
              }}>
       <h1 className="text-2xl font-bold" style={{ color:"white"}}>Water Fall</h1>
     </div>

 </div>

 <div style={{
  position: "relative",
  width: "200px",
  height:"400px",
  borderRadius: "10px",
  overflow: "hidden", 
  marginLeft:"2%",
  minHeight: "20vh",    
  maxHeight: "50vh",
}}>

   
    <img src={images2[index]} alt="auto" 
    style={{
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "0.3s",
      zIndex: 0,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";}}

    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";}}
  />
     <div style={{
       position: "absolute",
       bottom:"0px",
    width: "100%",
    height: "50px",

    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    
              }}>
       <h1 className="text-2xl font-bold" style={{ color:"white"}}>Mountains</h1>
     </div>
</div>
</div> */} 

  
  <ContactPopup/>

  <Watapp/>
    <Footer/>
    </>
  );
}

export default Home;
