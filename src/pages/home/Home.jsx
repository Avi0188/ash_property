import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import homeproperty from "../../assets/homeproperty.jpg";
const Home = () => {
  return (
    <>
      <div className="propertyImage">
        <Navbar />
        <div className="main-img">
          <div className="details">
            <div className="title">
              <div className="line"></div>
              <p>We are Offering the</p>
            </div>
            <div className="desc">
              <h1 className="heading">Best Real Estate Deals</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;