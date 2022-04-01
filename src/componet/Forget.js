import React from 'react'
const Forget = ({handleClose}) => {
  return (
    <div className='main-container'>
     <div className='container-pass'>
         <button onClick={()=>handleClose()} className='close'>Close</button>
         <p className='paragraph'>When You forget password full this form</p>
         <div className='forms'>
         <form action='#' className='fofo1'>
                Your names:<input type="text" placeholder='Enter Your names Here' className='names'size='16'/><br></br>
                Your E-mail:<input type="email" placeholder='Enter Your E-mail Here' className='E-mail'size='16'/><br></br>
                Password N:<input type="password" placeholder='Enter Your new password Here' className='passwor1'size='16'/><br></br>
               Password C:<input type="password" placeholder='Enter Your confirm Here' className='password2'size='16'/><br></br>
                Phone:<input type="text" placeholder='Enter Your Phone number Here' className='Phone'size='16'/><br></br>
              <div className='buttons'>
                   <button type='submit' className='button1'>Save</button>
                   <button type='cancel'onClick={()=>handleClose()} class='close' className='button2'>cancel</button>
              </div>
        </form>
        </div>
     </div>
    </div>

  )
}
export default Forget;
