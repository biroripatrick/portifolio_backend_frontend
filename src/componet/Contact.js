import React ,{useState} from 'react'
import emailjs from 'emailjs-com';
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube,faFacebook,faTwitter,faInstagram,faGithub} from'@fortawesome/free-brands-svg-icons';
import { Alert} from "react-bootstrap";
import './Contact.css'
import Logo from '../img/momo.PNG'
import {Link} from "react-router-dom";
const Contact = () => {
    const [message, setMessage ]=useState(null)
    const [show,setShow] = useState(false)
    const [toSend, setToSend] = useState({
       name: '',
       email: '',
      message: '',
    });
    // const handleClose =()=>{
    //   setShow(false)
    // }
  return (
    <div className='container-header'>
      <div className='Navbar'>
       <ul className='logo'><img src={Logo} alt='logo'/></ul>
       <li><i className="fa fa-home"></i><Link to="/">Home</Link></li>
      <li><i className="fa fa-book"></i><Link to="/Contact">Contact Us</Link></li>
      <li><i className="fa fa-user"></i><Link to="/About">About Us</Link></li>
      <li><i className="fa fa-user"></i><Link to="/My_works">My works</Link></li>
      <li><i className="fa fa-rss"></i> <Link to="/Blogs">Blogs</Link></li>
      <li><i className="fa-solid fa-arrow-right-long-to-line"></i><Link to="/FormSignup">Register</Link></li>
      </div>
      <div className='container-list'>
      <div className='section21'>
              <div className='type'>
                <Typewriter
                options={{
                  autoStart:true,
                  loop:true,
                  delay:40,
                  strings:[
                    "Contact ME here ?"
                  ],
                }}/>
              </div>
              <div className='ordered'>
                <ol>
                <li>Names:Birori patrick</li>
                <li>E-mail:biroripatrick@gmail.com</li>
                <li>Tel:+250788994934</li>
                <li>Instagram:biroripatrickruragira</li>
                <li>Twitter:@Patrick5Birori</li>
                <li>Facebbok:birori.patrick.90.com</li>
              </ol>
              </div>
      </div>
      <div className='section22'>
        <form className='form1' 
        onSubmit={SendEmail}
        >
          <div className='fist-fields'>
           <input type='text'
           name='name' 
           placeholder='Enter Your name'
           className='name1'required
           value={toSend?.name}
           onChange={(e)=>setToSend({...toSend,name:e.target.value})}
           />
           <input type='email'
           name='email' 
           placeholder='Enter Your email'
           className='email1'required
           value={toSend?.email}
           onChange={(e)=>setToSend({...toSend,email:e.target.value})}
           />
         {(message&&show)&&<div  style={{ position: "absolute", top: 20, right:195, zIndex: 999 }} >
           <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <p>
         {message}
        </p>
      </Alert></div>}
           <textarea name='message'
            className='message' 
            placeholder='Enter Your message'required
            value={toSend?.message}
            onChange={(e)=>setToSend({...toSend,message:e.target.value})}
            />
           </div>
           <div className='button'>
           <button 
          //  onClick={(e)=>SendEmail(e)}
           className='button-field'>send</button>
          </div>
        </form>
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
  function SendEmail(e) {
    console.log("submitting",e)
    e.preventDefault();
   
    emailjs.sendForm(
      "service_7phe8tx",
      "template_0l1rgvt",
      e.target,
      "glH9KpMO0vlgJ84Cl"
      ).then(res=>{
        console.log(res);
        if(res.status===200){
          setMessage("Message successfully sent !")
          setToSend({...toSend,name:"",email:"",message:""})
          setShow(true)
        }

      }).catch(err=>console.log(err));
  }

}
export default Contact;
