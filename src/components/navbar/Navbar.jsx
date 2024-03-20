import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="main">
      <div className="navContainer fixed">
        <div className="logo">
          <img
            src="https://scalebranding.com/wp-content/uploads/2021/04/1-140.jpg"
            alt="logo"
          />
          <div>
            <h4>Trophy nig</h4>
          </div>
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