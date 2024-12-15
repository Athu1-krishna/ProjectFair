import React from 'react'
import pnf from '../assets/Ghost.gif'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:"100vh"}} className='d-flex align-items-center justify-content-center flex-column'>
      <img src={pnf} alt="page not found" />
      <div style={{top:"56%"}} className='position-absolute d-flex flex-column'>
        <h2 className='d-flex align-items-center justify-content-center'>"4<span className='text-warning'>0</span>4"</h2>
        <h5 className='mt-3 d-flex align-items-center justify-content-center'>Looks like you are lost!</h5>
        <p className='d-flex align-items-center justify-content-center'>The page you are looking for is not available!</p>
        <Link to={'/'} style={{width:'150px'}} className='btn btn-warning mx-auto rounded'>Go to home</Link>
      </div>
    </div>
  )
}

export default Pnf