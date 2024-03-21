import React, { useState } from "react";
import "./Profile.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Profile() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`profile-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="prof-img">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="pro-det">
          <h4 className="pro-name">Brooklyn Simmon</h4>
          <p id="pro-profess">Professional designer</p>
        </div>
        <div className="social">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaLinkedinIn />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
