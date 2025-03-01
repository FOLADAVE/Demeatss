import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import demeats from '../../assets/demeats-high-resolution-logo-transparent(1).png';

const Footer = () => {


  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img onClick={()=>setMenu("home")} src={demeats} alt="" className='logo'/>
                <p>Demeats, your ultimate destination for culinary delights, invites you to embark on a gastronomic journey like no other. With a tantalizing array of premium meats, fresh produce, and artisanal ingredients, we cater to the discerning palate of food enthusiasts.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" className='icon'/>
                    <img src={assets.twitter_icon} alt="" className='icon'/>
                    <img src={assets.linkedin_icon} alt="" className='icon'/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+234-912-296-7131</li>
                    <li>contact@demeats.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Demeats.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer