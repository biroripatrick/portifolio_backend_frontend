import React from 'react';
import useForm from './userForm';
import {Link} from "react-router-dom";
import nonolo from "../img/nono.jpg";
import email from "../img/email.PNG";
import maillo from "../img/mail.png";
import passwod1 from "../img/password1.png";
import "./Home.css"
import Logo from '../img/momo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram,faGithub} from'@fortawesome/free-brands-svg-icons';
import validate from './validationInfo';
import './Form.css'
const FormSignup = ({submitForm}) => {
  const {handleChange,values, handleSubmit, errors} = useForm(submitForm,validate);

   console.log("values",values)
  return (
    <div className='loops'>
    <div className='Navbar'>
    <ul className='logo'><img src={Logo} alt='logo'/></ul>
    <li><i class="fa fa-home"></i><Link to="/">Home</Link></li>
      <li><i class="fa fa-book"></i><Link to="/Contact">Contact Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/About">About Us</Link></li>
      <li><i class="fa fa-user"></i><Link to="/My_works">My works</Link></li>
      <li><i class="fa fa-rss"></i> <Link to="/Blogs">Blogs</Link></li>
      <li><i class="fa-solid fa-arrow-right-long-to-line"></i><Link to="/FormSignup">Register</Link></li>
      </div>
      <div className='form-content-right'>
      <form  ction='insert.php' method='POST' className='form167' onSubmit={handleSubmit}>
      <h1>Registed Here ?</h1>
      <div className='form-inputs'>
        <label htmlFor='username'
         className='form-label'>
         <img src={email} alt="email" className="pass" />
        </label>
        <input  
        id='username'
        type="text"
        name='username'
         className='form-inputs'
         placeholder='enter Your username'
         value={values.username}
         onChange={handleChange}
         />
         {errors.username && <p>{errors.username}</p>}
      </div>
      <div className='form-inputs'>
        <label htmlFor='email'
         className='form-label'>
         <img src={maillo} alt="email" className="pass" />
        </label>
        <input 
        id='email'
        type="email"
        name='email'
         className='form-inputs'
         placeholder='enter Your email'
         value={values.email}
         onChange={handleChange}
         />
         {errors.email && <p>{errors.email}</p>}
      </div>
      <div className='form-inputs'>
        <label htmlFor='password'
         className='form-label'>
         <img src={passwod1} alt="passwod1" className="pass" />
        </label>
        <input 
        id='password'
        type="password"
        name='password'
         className='form-inputs'
         placeholder='enter Your password'
         value={values.password}
         onChange={handleChange}
         />
         {errors.password && <p>{errors.password}</p>}
      </div>
      <div className='form-inputs'>
        <label htmlFor='password2'
         className='form-label'>
          <img src={nonolo} alt="nonolo" className="pass" />
        </label>
        <input 
        id='c_password'
        type="password"
        name='c_password'
         className='form-inputs'
         placeholder='enter Your conf password'
         value={values.password2}
         onChange={handleChange}
         />
         {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <div className='link4'>
      <button type='Submit' className='form-btn'>Sign up</button>
      <span className='password3'>
          <span className='contentsn'>Already have an account login</span><a href='http://localhost:3000/Login'className="signn">Here ?</a> 
      </span>
      </div>
      </form>
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
export default FormSignup;
