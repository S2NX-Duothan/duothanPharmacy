import React from 'react'
import "../styles/signup.css"


const Signup = () => {
  return (
    <div className="main-container" >
      <div className='main-box'>
        <div className='title'><center>Sign Up</center></div>
        <div className='input-items'>
          <div className='btn-title'><label for="username">Pharmacy name:</label></div>
          <div className='btn-input'><input type="text" id="username" name="username"></input></div>
          <div className='btn-title'><label for="username">Email:</label></div>
          <div className='btn-input'><input type="text" id="username" name="username"></input></div>
          <div className='btn-title'><label for="username">Address:</label></div>
          <div className='btn-input'><input type="text" id="username" name="username"></input></div>
          <div className='btn-title'><label for="username">Phone number:</label></div>
          <div className='btn-input'><input type="text" id="username" name="username"></input></div>
          <div className='btn-title'><label for="username">Pharmacy license number:</label></div>
          <div className='btn-input'><input type="text" id="username" name="username"></input></div>
          <div className='btn-title'><label for="username">Password:</label></div>
          <div className='btn-input'><input type="password" id="username" name="username"></input></div>
          <div className='btn-title'><label for="username">Confirm password:</label></div>
          <div className='btn-input'><input type="password" id="username" name="username"></input></div>
        </div>
        <div className='input-condition'>
          <input type="checkbox" id="username" name="username"></input>
          <p>I agree to Terms of Service and Privacy Policy.</p>
        </div>
        <div className='submit-btn'>
          <center><button type="button">Sign Up</button></center>
        </div>
        <div className='sign-in'>
          <p>Already have an account? </p>
          <a href="#">Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Signup