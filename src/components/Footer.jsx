import React from 'react'
import "./Footer.css"
import facebook from"../assets/facebook.png"
import linkedin from"../assets/linkedin.png"
import instagram from"../assets/instagram.png"
import tiktok from"../assets/tiktok.png"


function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-img'>
          <a href="https://www.facebook.com/mahib.malak?mibextid=ZbWKwL"><img src={facebook} alt="facebook" style={{width:"40px"}} /></a>
          <a href="https://www.linkedin.com/in/mahib-ullah74/"><img src={linkedin} alt="linkedin" style={{width:"40px"}} /></a>
          <a href="https://www.instagram.com/mahibullah_skills_official?igsh=amd6NW14OTJncmh3"><img src={instagram} alt="instagram" style={{width:"40px"}} /></a>
          <a href="https://www.tiktok.com/@mahibullah_1?_t=8ohtCdTCmoc&_r=1"><img src={tiktok} alt="tiktok" style={{width:"40px"}} /></a>

        </div>
       <p>Copyright &copy; 2024 All rights reserved</p>
    </div>
  )
}

export default Footer
