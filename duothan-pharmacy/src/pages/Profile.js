import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import "../styles/profile.css";

const Profile = () => {
  return (
    <center>
    <div>
      <div className='phar-info'>
      <div className="heading">
        <h3>Pharmacy Information</h3>
      </div><br></br>

      <div className='phar-one'>
        <div className='phar-name'>
          <div>Pharmacy Name</div>
          <div><input type={text} className='text'></input></div>
        </div>
        <div className='add'>
          <div>Address</div>
          <div><input type={text}  className='text'></input></div>
        </div>
      </div><br></br>

      <div className='phar-one'>
        <div className='phar-name'>
          <div>Phone number</div>
          <div><input type={text}  className='text'></input></div>
        </div>
        <div className='add'>
          <div>Email</div>
          <div><input type={text}  className='text'></input></div>
        </div>
      </div><br></br> 

      <div className='phar-one'>
        <div className='phar-name'>
          <div>Website</div>
          <div><input type={text}  className='text'></input></div>
        </div>
        <div className='add'>
          <div>Operating hours</div>
          <div><input type={text} className='text'></input></div>
        </div>
      </div><br></br> 

      <div className='phar-one'>
        <div className='sub-headings'>
          <div>Pharmacy license</div>
          <div><input type={text} className='text'></input></div>
        </div>
      </div> 
      </div>

      <div className='owner-info'>
      <div className="heading">
        <h3>Owner Information</h3>
      </div><br></br>

      <div className='owner-one'>
        <div className='owner-name'>
          <div>Owner Name</div>
          <div><input type={text} className='text'></input></div>
        </div>
        <div className='add'>
          <div>Address</div>
          <div className='text-area'><input type={text} className='text'></input></div>
        </div>
      </div><br></br> 

      <div className='owner-one'>
        <div className='owner-name'>
          <div>Owner phone number</div>
          <div><input type={text} className='text'></input></div>
        </div>
        <div className='add'>
          <div>Owner email</div>
          <div><input type={text} className='text'></input></div>
        </div>
      </div><br></br> 

      <div className='owner-one'>
        <div className='sub-headings'>
          <div>Owner NIC</div>
          <div><input type={text} className='text'></input></div>
        </div>
      </div> 
      </div>

    <div className='submit-btn'>
      <form>
      <button type = 'submit' className='sub-btn'>Save</button>
      </form>
    </div>

    </div>
    </center>
  )
}

export default Profile
