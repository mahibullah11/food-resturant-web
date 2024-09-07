import React from 'react'
import logo from "../assets/logo.jpg"
import "./Header.css"

//HEDER

function Header() {
  return (
    <header className="header-container">
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo"  style={{height:"50px"}}/>
      </div>
      <ul className='nav-links'>
        <li><a href="">HOME</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">FOOD</a></li>
        <li><a href="">CONTACT</a></li>

      </ul>
    </nav>
   </header>
  
  )
}
export default Header