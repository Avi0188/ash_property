import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='main' >
        <div className='navContainer fixed'>
            <div className='logo' >
            <img src="" alt="logo" />    
            </div>
     <div className='navinfo'>
        <p>Home</p>
      <p>Properties</p>
      <p>Designs</p>
      <p>Search</p>
      <p>About us</p>
      <p>Contact us</p>
      <select name="" id="">
        <option value="">Create Listing</option>
        <option value=""></option>
        <option value=""></option>
      </select>
     </div>
      
        </div>
    
    </div>
  )
}

export default Navbar
