import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import KeralaMap from "./pages/districts/district";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import DistrictDetails from "./pages/districts/Touristplaces"; // Adjust the import path as necessary
import ContactUs from "./pages/Contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/district" element={<KeralaMap />} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/district/:districtName" element={<DistrictDetails />} />
        <Route path="/contact" element={<ContactUs/>} />




        
      </Routes>
    </Router>
  );
}

export default App;
