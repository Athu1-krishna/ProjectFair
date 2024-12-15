import React, { useContext, useState } from 'react'
import authImg from '../assets/auth.jpeg'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'
import { tokenContext } from '../contexts/TokenAuth'

const Auth = ({ insideRegister }) => {
  const { authorizedUser, setAuthorizedUser } = useContext(tokenContext)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    username: "", email: "", password: ""
  })
  console.log(userInput);
  
  // register
  const register = async (e) => {
    e.preventDefault()
    if (userInput.username && userInput.password && userInput.email) {
      //api call
      try {
        const result = await registerAPI(userInput)
        if (result.status == 200) {
          alert(`Welcome ${result.data?.username}, Please login to explore our projects!!!`)
          navigate("/login")
          setUserInput({ username: "", email: "", password: "" })
        } else {
          if (result.response.status == 406) {
            alert(result.response.data)
            setUserInput({ username: "", email: "", password: "" })
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill the form completely!!!")
    }
  }
  // login
  const login  = async (e) =>{
    e.preventDefault()
    if (userInput.password && userInput.email) {
      //api call
      try {
        const result = await loginAPI(userInput)
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setIsLogin(true)
          setAuthorizedUser(true)
          setTimeout(() => {
            navigate('/')
            setUserInput({ username: "", email: "", password: "" })
            setIsLogin(false)
          }, 1500);
        } else {
          if (result.response.status == 404) {
            alert(result.response.data)
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill the form completely!!!")
    }
  }

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
                    <Form.Control value={userInput.username} onChange={e=>setUserInput({...userInput, username:e.target.value})} type="text" placeholder="Username" />
                  </FloatingLabel>
                }
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInput.email} onChange={e => setUserInput({ ...userInput, email: e.target.value })} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel 
                  controlId="floatingPassword" 
                  label="Password">
                  <Form.Control value={userInput.password} onChange={e => setUserInput({ ...userInput, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister 
                  ?
                  <div className="mt-3">
                      <button onClick={register} className='btn btn-info my-2'>Register</button>
                      <p>Existing user? Please click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                      <button onClick={login} className='btn btn-info my-2 d-flex align-items-center'>
                        Login
                        { isLogin && <Spinner className='ms-2' animation="border" variant="light" />}
                      </button>
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