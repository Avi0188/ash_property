import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './home.css';
import homeproperty from "../../assets/homeproperty.jpg"

const Home = () => {
  return (
    <div>
      <Navbar />
      
   <div className='propertyImage'>
    <img className='main-img' src={homeproperty} alt="property" />
   </div>
        
  

      <Footer />
    </div>
  );
};

export default Home;
