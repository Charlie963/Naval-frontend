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
    <div>

    <div class="footer-dark">
        <footer>
        <div className="footer_container">
               
                    <div>
                        <h3>Navigation</h3>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/SocialCards">Find my colleague</a></li>
                            <li><a href="/Profile">My Profile</a></li>
                            <li><a href="Contactus">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer_containe">
                        <h3>Development Team</h3>
                        <ul>
                       <li>Captain Peush Pawsey <br />
                        Director of Hydrography (Operations)
                        </li> 
                        <li>
                        Dinesh Babu Ex-POSR I
                        </li>
                        <li>
                        Somvir POSRI
                        </li>

                        
                        </ul>
                    </div>
                    <div className="footer_containe">
                        <h3>Contact Us</h3>
                        <ul>
                        <li>National Hydrographic Office
                        107-A, Rajpur Road,</li>
                        <li>Post Box No. 75, Dehradun- 248 001, India</li>
                        <li>Tel: +91-135-2747365, Fax: +91-135-3748373</li>
                        <li>Email: inho-navy@nic.in, Web: www.hydrobharat.nic.in</li>
                        </ul>
                        
                    </div>
                    </div>
                    <div class="footer_container_1">
                        <AiFillFacebook size={24} /><AiFillTwitterCircle size={24}/><AiFillInstagram size={24}/><AiFillLinkedin size={24}/>
                    </div>
                    <p class="copyright">Tech Enigma © 2022</p>
        </footer>
    </div>
    

    </div>
  );
}

export default Footer;