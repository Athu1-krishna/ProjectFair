import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import profilePic from '../assets/account.png'
const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-evenly mt-5">
        <h3 className="text-warning">Profile</h3>
        <button
        onClick={()=>setOpen(!open)}
        className="btn text-warning"><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      <Collapse in={open} className='p-5'>
        <div id="example-collapse-text" className='container-fluid row align-items-center justify-content-center shadow p-2 rounded'>
          {/* upload image */}
          <label className="text-center">
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='rounded-circle' src={profilePic} alt="" />
          </label>
          <div className="mb-2 w-100">
            <input type="text" placeholder='Github link' className='form-control' />
          </div>
          <div className="mb-2 w-100">
            <input type="text" placeholder='Linkedin link' className='form-control' />
          </div>
          <div className="d-grid w-100">
            <button className="btn btn-warning">Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile