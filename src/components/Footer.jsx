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
    

    <div className='foooter' >
        <footer>
      <div className="main-content">
        <div className="left box">
          <h2>Navigation</h2>
          <div className="content">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/SocialCards">Find my colleague</a></li>
                            <li><a href="/Profile">My Profile</a></li>
                            <li><a href="/home">Contact us</a></li>
                            <li><a href="/Directory">Directory</a></li>
                        </ul>
            <div className="social">
              <a href="#"><span class="fab fa-facebook-f"></span></a>
              <a href="#"><span class="fab fa-twitter"></span></a>
              <a href="#"><span class="fab fa-instagram"></span></a>
              <a href="#"><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>

        <div className="right box">
          <h2>Address</h2>
          <div className="content">
           
              <div className="email">
                <div className="text"> National Hydrographic Office
              107-A, Rajpur Road, <br />
              Post Box No. 75, Dehradun- 248 001, India <br/><br/>
                      </div>
              </div>
              <div className="msg">
                <div className="text">Tel: +91-135-2747365, Fax: +91-135-3748373 <br /><br/>
                
                
                Email: inho-navy@nic.in, Web: www.hydrobharat.nic.in </div>
               
              </div>
             
            
          </div>
        </div>

     

        <div className="right box">
          <h2>Development Team</h2>
          <div className="content">
           
                <div className="text"> <h2>Captain N Dheeraj<br /></h2>
                
                <div className="text">
                   <h2>Dinesh Babu Ex-POSR I <br /></h2>
                9760755024 
                <h2>Cdr BS Rainu (Retd)</h2>
                <h2>Prahlad Ram LS (HY)</h2> </div>


               
              </div>
             
            
          </div>
        </div>
      </div>
      <p className="copyright">Tech Enigma © 2023</p>
      
    </footer>
    </div>
    

    
  );
}

export default Footer;

/*<div classNames="center">
<h2>Address</h2>
<div className="content">
  <div className="place">
    <span class="fas fa-map-marker-alt"></span>
  
    <span className="text">National Hydrographic Office
              107-A, Rajpur Road, <br />
              Post Box No. 75, Dehradun- 248 001, India </span>
  </div>
  <div className="phone">
    <span class="fas fa-phone-alt"></span>
    <span className="text">Tel: +91-135-2747365, Fax: +91-135-3748373</span>
  </div>
  <div className="email">
    <span class="fas fa-envelope"></span>
    <span className="text">Email: inho-navy@nic.in, Web: www.hydrobharat.nic.in</span>
  </div>
</div>
</div>***********/