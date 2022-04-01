import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram,faGithub} from'@fortawesome/free-brands-svg-icons';
// import "./Home.css"
import "./Blogs.css"
import Logo from '../img/momo.PNG'
import {Link} from "react-router-dom";
const Blogs = () => {
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
      <div className='container-iterms'>
      {/* <p className='content-paris'>WELCOME TO MY PERSONAL BACKGROUND</p> */}
         <div className='articles'> 
             <div className='section1'>Experience Background
             <div className='para'>
             <p className='jiji'>Experience</p>
             <div className='group'><ul><b className='holding'>2015-2017</b><li className='list'><strong className='clear'>Teacher and data analysis in Nyabiheke primary school</strong></li></ul></div>
             <p className='paris'>
               I worked as teacher of nyabiheke primary school in one year (p1 and p2) in 2017.<br></br>
              I worked as teacher of I C T 0’level in nyabiheke secondary school in 2020.<br></br></p>
             <span className='group'><ul><b className='holding'>2015-2017</b><li className='list'><strong className='clear'>worked internship in university of Kigali as I T.</strong></li></ul></span>
             <p className='iterms'> Agent of Urimuri Company in nyabiheke camp.<br></br>
                        <br></br>
                To collect data by using primary research and secondary.<br></br></p>
                </div>
                </div>
           <div className='section2'>Education Background
           <p className='para2'>Education</p>
           <span  className='group'><b className='holding'>2003-2008</b><li className='list'><strong className='clear'>Primary school</strong></li></span>
              <p className='iterms'> Nyabiheke primary school</p>
              <span className='group'><b className='holding'>209-2012</b><li className='list'><strong className='clear'> 0'level school</strong></li></span>
              <p className='iterms'>G s Nyangahanga</p>
             <span className='group'><b className='holding'>2013-2015</b><li className='list'><strong className='clear'>Secondary school</strong></li></span>
             <p className='iterms'>College Baptiste De NGarama</p>
             <span className='group'><b className='holding'>2021-2022</b><li className='list'><strong className='clear'>Short-course coding school</strong></li></span>
             <p className='iterms'>Nyabiheke coding school</p>
             <p className='certifications'>Certifications</p>
             <ul className='hoho'>Diploma of completed secondary school</ul>
             <ul className='bobio'>Certificate of business development of inkomoko</ul>
             <ul className='bbhhh'>Awards Provided by internship of completing of studies. 2021</ul>
             <ul className='hkok'> Awords of progate learnning online</ul>
               </div>
           <div className='section3'>
             Information Background
             <div className='content2'>
             <ul className='btn23'>Information</ul>
             <p className='jjjjj'>
             Names:Birori patrick<br></br>
             Email:biroripatrick@gmail.com<br></br>
             Phone:+250788994834<br></br>
             Adress:kabarore<br></br>
             Date of birth:01/02/1996<br></br>
            </p> 
            <ul className='btn56'>Skills</ul>
        <ul className='fofo'><b>software</b>
          <p className='going'>
            Figma<br></br>
            Microsoft office<br></br>
            Disk operating system<br></br>
            Adobe leader<br></br>
            
          </p>
        </ul>
        {/* <ul class="fofo3334"><b class="oops">Programming langauges</b></ul>
        <ul class="link">
          <p class="going22">
            PHP <br></br>
            PYTHON<br></br>
            JAVACRIPT<br></br>
            HTML5 and CSS<br></br>
            MYSQL DATABASE<br></br>
            FIREBASE<br></br>
          </p>
        </ul> */}
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
    </div>
  )
}

export default Blogs;
