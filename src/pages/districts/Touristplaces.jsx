import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

// Dummy data for now
const touristSpots = {
  thiruvananthapuram: [
    { name: "Kovalam Beach", image: "/kovalam.jpg" },
    { name: "Padmanabhaswamy Temple", image: "/temple.jpg" },
    { name: "Veli Tourist Village", image: "/veli.jpg" },
    { name: "Napier Museum", image: "/museum.jpg" },
    { name: "Varkala", image: "/varkala.jpg" },
    { name: "Shangmukam beach", image: "/beach.jpg" },
    { name: "ponmudi", image: "/ponmudi.jpg" },
    { name: "Agasthyakoodam", image: "/agasthya.jpg" },




  ],

  kollam:[
    { name: "Ashtamudi Lake", image: "/ashtamudi.jpg" },
    { name: "Munroe Island", image: "/munroe.jpg" },
    { name: "Thangassery Lighthouse", image: "/lighthouse.jpg" },
    { name: "Palaruvi Waterfalls", image: "/palaruvi.jpg" },
    { name: "Sasthamkotta Lake", image: "/sasathamkotta.jpg" },
    { name: "Thirumullavaram Beach", image: "/thirumullavaram.jpg" },
    { name: "Kottarakara Ganapathy Temple", image: "/kottarakara.jpg" },
    { name: "JatayuPara", image: "/jatayu.jpg" },



  ],

  pathanamthitta: [
    { name: "Sabarimala", image: "/sabarimala.jpg" },
    { name: "Perunthenaruvi Waterfalls", image: "/perunthenaruvi.jpg" },
    { name: "Konni Elephant Training Center", image: "/konni.jpg" },
    { name: "Aranmula Parthasarathy Temple", image: "/aranmula.jpg" },
    { name: "Chandanapally", image: "/chandhanapally.jpg" },
    { name: "Kumbhavurutty Waterfalls", image: "/kumbhavurutty.jpg" },
    { name: "Pandalam Palace", image: "/pandalam.jpg" },
    { name: "Achankovil River", image: "/achankovil.jpg" },


  ],

  alappuzha: [
    { name: "Alleppey Backwater", image: "/a1.jpg" },
    { name: "Alappuzha Lighthouse", image: "/a2.jpg" },
    { name: "Sree Krishna Swamy Temple", image: "/a3.jpg" },
    { name: "Revi Karunakaran Memorial Muesum", image: "/a4.jpg" },
    { name: "Mannarasala Sree Nagaraja Temple", image: "/a5.jpg" },
    { name: "International Coir Museum", image: "/a6.jpg" },
    { name: "Kalloorkad St. Mary's Bascilia", image: "/a7.jpg" },
    { name: "Marari Beach", image: "/a8.jpg" },
    { name: "Punnamada Lake", image: "/a9.jpg" },
  ],

  kottayam: [
    { name: "ILLICKAL KALLU", image: "/k1.jpg" },
    { name: "ARUVIKUZHY WATERFALLS", image: "/k2.jpg" },
    { name: "MALARIKKAL VILLAGE TOURISM", image: "/k3.jpg" },
    { name: "ILAVEEZHAPOONCHIRA", image: "/k31.jpg" },
    { name: "VEMBANAD LAKE", image: "/k5.jpg" },
    { name: "POONJAR PALACE", image: "/k6.jpg" },
    { name: "THAZHATHANGADI JUMA MASJID", image: "/k7.jpg" },
    { name: "VAGAMON", image: "/k8.jpg" },
    { name: "BIRD SANCTUARY, KUMARAKOM", image: "/k9.jpg" },
    { name: "KUMARAKOM", image: "/k10.jpg" },
  ],

  idukki: [
    { name: "Kulamavu Dam", image: "/i1.jpg" },
    { name: "Cheruthoni Dam", image: "/i2.jpg" },
    { name: "Periyar Tiger Reserve, Thekkady", image: "/i3.jpg" },
    { name: "Munnar", image: "/i4.jpg" },
    { name: "Idukki Arch Dam", image: "/i5.jpg" },
  ] ,

  ernakulam : [
    { name: "Areekkal Waterfalls", image: "../../e1.jpg" },
    { name: "Bastion Bunglow", image: "../../e2.jpg" },
    { name: "Bhoothathankettu", image: "../../e3.jpg" },
    { name: "Bolghatty palace", image: "../../e4.jpg" },
    { name: "Chendamangalam", image: "../../e5.jpg" },
    { name: "Cherai Beach", image: "../../e6.jpg" },
    { name: "Children's Park", image: "../../e7.jpg" },
    { name: "Chinese Fishing Nets", image: "../../e8.jpg" },
    { name: "Dutch Palace", image: "../../e9.jpg" },
    { name: "Hill Palace", image: "../../e10.jpg" },
    { name: "Chendamangalam", image: "../../e11.jpg" },
    { name: "Kodanad", image: "../../e12.jpg" },
    { name: "Marine Drive", image: "../../e13.jpg" },
  ] ,
  

   thrissur : [
    { name: "Athirappilly Waterfall", image: "../../t1.jpg" },
    { name: "Sakthan Palace", image: "../../t2.jpg" },
    { name: "Punnathur Kotta", image: "../../t3.jpg" },
  ] , 

  pala : [
    { name: "Athirappilly Waterfall", image: "../../t1.jpg" },
    { name: "Sakthan Palace", image: "../../t2.jpg" },
    { name: "Punnathur Kotta", image: "../../t3.jpg" },
  ] , 

  palakkad : [
    { name: "Nelliyampathy", image: "../../p1.jpg" },
    { name: "Palakkad Fort", image: "../../p2.jpg" },
    { name: "Parambikulam", image: "../../p3.jpg" },
    { name: "Silent Valley National Park", image: "../../p4.jpg" },
  ] , 
   
  malappuram : [
    { name: "Nelliyampathy", image: "../../p1.jpg" },
    { name: "Palakkad Fort", image: "../../p2.jpg" },
    { name: "Parambikulam", image: "../../p3.jpg" },
    { name: "Silent Valley National Park", image: "../../p4.jpg" },
  ] , 

    kozhikode : [
    { name: "Kallayi", image: "../../ko1.jpg" },
    { name: "Lokanarkavu Temple", image: "../../ko2.jpg" },
    { name: "Pazhassi Raja Museum", image: "../../ko3.jpg" },
    { name: "Nadapuram Masjid", image: "../../ko4.jpg" },
    { name: "Parappalli Beach", image: "../../ko5.jpg" },
    { name: "Aripara Waterfalls", image: "../../ko6.jpg" },
    { name: "Thikkodi Drive-In Beach", image: "../../ko7.jpg" },
    { name: "Kadalur Point Lighthouse", image: "../../ko8.jpg" },
    { name: "Amarad Waterfall", image: "../../ko9.jpg" },
    { name: "Kozhikode Beach", image: "../../ko10.jpg" },
  ] , 

      wayanad : [
    { name: "Phantom Rock", image: "../../wa1.jpg" },
    { name: "Tholpetty WildLife Sanctuary", image: "../../wa2.jpg" },
    { name: "Banasura Sagar Dam", image: "../../wa3.jpg" },
    { name: "Edakkal Caves", image: "../../wa4.jpg" },
  ] , 

     kannur : [
    { name: "Paithalmala", image: "../../ka1.jpg" },
    { name: "Kannur Fort", image: "../../ka2.jpg" },
    { name: "Payyambalam Beach", image: "../../ka3.jpg" },
  ] , 

    kasaragod : [
    { name: "Bekal Fort", image: "../../god1.jpg" },
    { name: "Ranipuram Hills", image: "../../god2.jpg" },
    { name: "Chandragiri Fort", image: "../../god3.jpg" },
    { name: "Valiyaparamba Backwaters", image: "../../god4.jpg" },
    { name: "Nileswaram", image: "../../god5.jpg" },
    { name: "Possadi Gumpe", image: "../../god6.jpg" },
    { name: "Kanhangad", image: "../../god7.jpg" },
    { name: "Malik Ibn Dinar Mosque", image: "../../god8.jpg" },
    { name: "Ananthapura Lake Temple", image: "../../god9.jpg" },
  ] , 


  
  








  
  // You can add more districts here...
};

const DistrictDetails = () => {
  const { districtName } = useParams();
  const places = touristSpots[districtName] || [];

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <h2 style={styles.title}>
  {districtName
    ? `Tourist Places in ${districtName.charAt(0).toUpperCase() + districtName.slice(1)}`
    : "Loading..."}
</h2>


        <div style={styles.grid}>
          {places.map((place, index) => (
            <div key={index} style={styles.card}>
              <img src={place.image} alt={place.name} style={styles.image} />
              <div style={styles.placeName}>{place.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

// Styles
const styles = {
  page: {
    padding: "40px",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    textAlign: "center",
  },
  title: {
    fontWeight: "700",
    marginBottom: "30px",
    fontSize: "24px",
    color: "#065f46",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  placeName: {
    padding: "15px",
    fontWeight: "600",
    color: "#333",
  },
};

export default DistrictDetails;
