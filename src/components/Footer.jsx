import React from 'react';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillFacebook,
    AiFillInstagram,
  } from "react-icons/ai";

const Footer = () => {
  return (
    

    <div class='foooter' >
        <footer>
      <div class="main-content">
        <div class="left box">
          <h2>Navigation</h2>
          <div class="content">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/SocialCards">Find my colleague</a></li>
                            <li><a href="/Profile">My Profile</a></li>
                            <li><a href="/Contactus">Contact us</a></li>
                            <li><a href="/Directory">Directory</a></li>
                        </ul>
            <div class="social">
              <a href="#"><span class="fab fa-facebook-f"></span></a>
              <a href="#"><span class="fab fa-twitter"></span></a>
              <a href="#"><span class="fab fa-instagram"></span></a>
              <a href="#"><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>

        <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">National Hydrographic Office
                        107-A, Rajpur Road, <br />
                        Post Box No. 75, Dehradun- 248 001, India </span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">Tel: +91-135-2747365, Fax: +91-135-3748373</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">Email: inho-navy@nic.in, Web: www.hydrobharat.nic.in</span>
            </div>
          </div>
        </div>

        <div class="right box">
          <h2>Development Team</h2>
          <div class="content">
           
              <div class="email">
                <div class="text"> <h2>Captain Peush Pawsey <br /></h2>
                        Director of Hydrography (Operations)</div>
              </div>
              <div class="msg">
                <div class="text"> <h2>Dinesh Babu Ex-POSR I <br /></h2>
                9760755024 
                
                <h2>Somvir POSRI</h2> </div>
               
              </div>
             
            
          </div>
        </div>
      </div>
      <p className="copyright">Tech Enigma © 2022</p>
      
    </footer>
    </div>
    

    
  );
}

export default Footer;