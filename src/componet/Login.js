import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram,faGithub,fagoogle} from'@fortawesome/free-brands-svg-icons';
import axios from "axios";
import "./Home.css";
import Logo from "../img/momo.PNG";
import emailLogo from "../img/email.PNG";
import pass from "../img/pass.PNG";
import login from "../img/login6.jpg";
import login2 from "../img/login.jpg";
import {Link,useNavigate} from "react-router-dom";
import { Modal } from "react-bootstrap";
import Forget from "./Forget";
const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/");
  };
  const [data ,setdata]=useState({
    email:"",
    password:""

  })
  const handleChange=(e) =>{
         setdata({...data, [e.target.name]:e.target.value})
  }
   const submitForm=(e)=>{
     e.preventDefault();
   const  senddata = {
     email:data.email,
     password:data.password
    }
    axios.post('http://localhost/PORTIFOLIO_BACK/user/login.php' ,senddata)
    console.log(senddata);
   }
  const [showModal, setShowModal] = useState(false);
  // const [email,setEmail]=useState(null)
  // const [password,setPassword]=useState(null)
 
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="Navbar">
        <ul className="logo">
          <img src={Logo} alt="logo"/>
        </ul>
        <li><i class="fa fa-home"></i><Link to="/">Home</Link></li>
      <li><i class="fa fa-book"></i><Link to="/Contact">Contact Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/About">About Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/My_works">My works</Link></li>
      <li><i class="fa fa-rss"></i> <Link to="/Blogs">Blogs</Link></li>
      <li><i class="fa-solid fa-arrow-right-long-to-line"></i><Link to="/FormSignup">Register</Link></li>
      </div>
      <div className="containers">
        <div className="sub">
          <form onSubmit={submitForm}>
            <img src={login} alt="login" className="login6" />
            <img src={login2} alt="login2" className="login2" />
            <div className="form">
              <div className="form-group">
                <img src={emailLogo} alt="email" className="email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="name"
                  onChange={handleChange} value={data.email}
                />
              </div>
              <div className="error"></div>
              <div className="form-group">
                <img src={pass} alt="pass" className="pass" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" Your Password"     
                  className="password"
                  onChange={handleChange} value={data.password}
                />
              </div>
              <div className="error"></div>
              <div className="password888">
              <button type='submit' className="login-button"><a href="http://localhost:3000/FormSignup">Register</a></button>
              <button type='submit' className="login-button">Login</button>
              <button type="submit"onClick={() => setShowModal(true)} className="passport">Forget Password?</button>
              </div>
            </div>
          </form>
          <Modal show={showModal} onHide={handleClose} closeButton>
            <Modal.Body>
              <Forget handleClose={handleClose} />
            </Modal.Body>
          </Modal>
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
  );
};
export default Login;
