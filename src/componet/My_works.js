import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram ,faGithub} from'@fortawesome/free-brands-svg-icons';
import "./Home.css";
import "./work.css";
import Logo from "../img/momo.PNG";
import {Link} from "react-router-dom";
const My_works = () => {
  return (
    <div>
      <div className='Navbar'>
       <ul className='logo'><img src={Logo} alt='logo'/></ul>
       <li><i class="fa fa-home"></i><Link to="/">Home</Link></li>
      <li><i class="fa fa-book"></i><Link to="/Contact">Contact Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/About">About Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/My_works">My works</Link></li>
      <li><i class="fa fa-rss"></i> <Link to="/Blogs">Blogs</Link></li>
      <li><i class="fa-solid fa-arrow-right-long-to-line"></i><Link to="/FormSignup">Register</Link></li>
      </div>
      <div className='works'>
          <div className='projects'>
          <ol>
            <li>How can add students project</li>
            <li>How can insert,update and delete project</li>
            <li>My Culcilum vital project</li>
            <li>Online store project</li>
            <li>How can add students project</li>
            <li>How can insert,update and delete project</li>
            <li>My Culcilum vital project</li>
            <li>Online store project</li>
            <li>How can add students project</li>
            <li>How can insert,update and delete project</li>
            <li>My Culcilum vital project</li>
            <li>Online store project</li>
            <li>How can add students project</li>
            <li>How can insert,update and delete project</li>
            <li>My Culcilum vital project</li>
            <li>Online store project</li>
            <li>How can add students project</li>
            <li>How can insert,update and delete project</li>
          </ol>
          </div>
         <div className='project-button'>
           <div className='button13'>
           <button type="button" className="student"><a href="#"> Add students project</a></button>
           </div> 
           <div className='button22'>
           <button type="button" className="CRUP"><a href="#">add,update and delete project</a></button>
           </div>
           <div className='button3'>
           <button type="button" className="cv"><a href="#">my Culcilum vital project</a></button>
           </div>
           <div className='button4'>
           <button type="button" className="online"><a href="#">Online store project</a></button>
           </div>
        </div>
      </div>
      <div className='footer'>
      <div className='footer-list'>
        <p className='paty'><a href="https://www.youtube.com"className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
      <a href="https://www.facebook.com/muhoza.alexis.90"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/Patrick5Birori" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/biroripatrickruragira"className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://github.com/biroripatrick"className="github social"><FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
          </p>
          <div className='emails'><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">biroripatrick@gmail.com</a></div>
         </div>
      </div>
    </div>
  )
}
export default My_works;
