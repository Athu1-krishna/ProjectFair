import React from 'react'
import authImg from '../assets/auth.jpeg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({ insideRegister }) => {
  return (
    <div style={{minHeight:'100vh', width:'100%', padding:'auto 300px'}}  className='d-flex align-items-center justify-content-center bg-info'>
        <div className="container">
          <div className="card shadow p-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={authImg} alt="authentication image" className='img-fluid' />
              </div>
              <div className="col-lg-6 px-5">
              <h1 className=''><i className='fa-brands fa-docker'></i>Project Fair </h1>
              <h5>Sign {insideRegister ? "Up" : "In"} to your account</h5>
              <Form>
                {
                  insideRegister && 
                  <FloatingLabel
                    controlId="floatingInputUsername"
                    label="username "
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Username" />
                  </FloatingLabel>
                }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister 
                  ?
                  <div className="mt-3">
                      <button className='btn btn-info my-2'>Register</button>
                      <p>Existing user? Please click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                      <button className='btn btn-info my-2'>Login</button>
                      <p>New user? Please click here to <Link to={'/register'}>Register</Link></p>
                  </div>
                }
              </Form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Auth