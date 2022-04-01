import React, { userState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] =userState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
  return (
    <>
    <div className='form-container'>
     <span className='close-btn'>x</span>
     <div className='form-content-left'>
      <img src='img/home,jpg' alt='spaceship' className='form-img'/>
     </div>
     {!isSubmitted ? <FormSignup submitForm={submitForm}/> :<FormSuccess/>} 
    </div>
    </>
  );
};

export default Form;
