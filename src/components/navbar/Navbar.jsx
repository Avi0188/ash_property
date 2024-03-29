import React from "react";
import "./navbar.css";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/mainlogo.png"
const Navbar = () => {
  return (
    <div className="main">
      <div className="navContainer fixed">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
          />
    
        </div>
        <div className="navinfo">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Properties</p>
          </div>
          <div>
            <p>Designs</p>
          </div>
          <div>
            <p>Search</p>
          </div>
          <div>
            <p>About us</p>
          </div>
          <div>
            <p>Contact us</p>
          </div>
         <div>
         <CgProfile />
         </div>

          <div className="select-tag">
            <select name="" id="">
              <option value="">Create Listing</option>
              <option value="">House</option>
              <option value="">Book</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
