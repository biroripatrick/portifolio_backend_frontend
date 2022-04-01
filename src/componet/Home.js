import React ,{ useState} from 'react';
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram,faGithub} from'@fortawesome/free-brands-svg-icons';
import "./Home.css"
import Logo from '../img/momo.PNG';
import {Link} from "react-router-dom";
const Home = () => {
  const[ state ] = useState ({
        // title:"Hi",
        // titleTwo:"I'm",
  });
  return (
    <div className='connection'>
    <div className='Navbar'>
    <ul className='logo'>Portifolio</ul>
      <li><i class="fa fa-home"></i><Link to="/">Home</Link></li>
      <li><i class="fa fa-book"></i><Link to="/Contact">Contact Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/About">About us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/My_works">My works</Link></li>
      <li><i class="fa fa-rss"></i> <Link to="/Blogs">Blogs</Link></li>
      <li><i class="fa-solid fa-arrow-right-long-to-line"></i><Link to="/FormSignup">Register</Link></li>
      </div>
      <div className='description'>
          <div className='App-header'>
            <img src={Logo} alt='logo'/>
            <h1> Hi I'm BIRORI PATRICK</h1>
            <div className='home-intro'>
              <h2>
                  <div className='title'>{state.title}</div>
                  <div className='titleTwo'>{state.titleTwo}</div>
                  <div className='titleTree'>{state.titleThree}</div>
                  <div className='titleTwo'>{state.titleFour}</div>
                  <div className='titleTree'>{state.titleFive}</div>
              </h2>
              <div className='text'>
                <Typewriter
                options={{
                  autoStart:true,
                  loop:true,
                  delay:40,
                  strings:[
                    "I'm BIRORI PATRICK",
                    "I'm a web Developer",
                    "My front end Developer",
                    "I'm a full stack Developer",
                    "My married"
                  ],
                }}/>
              </div>
              {/* <button type='Submit'name='button' className='contact'>Contact me</button> */}
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

export default Home;
