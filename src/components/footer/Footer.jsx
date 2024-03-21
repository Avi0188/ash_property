import React from 'react'
import "./footer.css"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div id='first-col'>
     <img className='footer-logo'  src="https://scalebranding.com/wp-content/uploads/2021/04/1-140.jpg" alt="logo" />
     <div className='socialmedia-app'>
     <FaFacebookF />
     <FaInstagram />
     <FaTwitter />
     </div>
   <p>info@trophynig.com</p>
   <p>8549652148</p>
   <p>2972 Westheimer Rd. Santa Ana,Illinois 85486</p>
      </div>


      <div id='second-col'>

<h2>Company</h2>
<p>About Us</p>
<p>Contact Us</p>
<p>Pricing</p>
<p>Terms & Condition</p>
<p>Report A Problem</p>
<p>Private Policy</p>
      </div>


      <div id='third-col'>
<h4>Stay Upto Date</h4>
<input type="email" placeholder='Enter Your Email Adress' />

<h4>Subscribe For Newsletter &gt;&gt;</h4>
      </div>
    </div>
  )
}

export default Footer
