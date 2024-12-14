import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/hero-img.gif'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
const Home = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(()=> {
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])
  return (
    <>
         {/* landing */}
          <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 p-5">
                          <h1 style={{ fontSize: '60px' }}><i className='fa-brands fa-docker'></i> Project Fair</h1>
                          <p style={{ textAlign: 'justify' }}>One stop destination for all Software Development Projects. Where user can add and manage their projects. As well as access all projects available in our website ... What are you waiting for !</p>
                          {
                            isLogin
                            ?
                             <Link to={'/dashboard'} className='btn btn-info'>MANAGE PROJECTS</Link>
                            :
                             <Link to={'/login'} className='btn btn-info'>START TO EXPLORE</Link>
                          }
                      </div>
                      <div className="col-lg-6">
                          <img className='img-fluid' src={img} alt="hero image" />
                      </div>
                  </div>
              </div>
          </div>
         {/* Explore our projects */}
         <div className="my-5 text-center">
            <h2 className='my-5 mt-3'>Explore Our Projects</h2>
            <marquee behavior="" direction="">
                <div className="d-flex">
                    <div className="me-5">
                        <ProjectCard/>
                    </div>
                </div>
            </marquee>
            <button className="btn btn-link mt-5">Click here to view more Projects...</button>
         </div>
         {/* our testimonial */}
         <div className="d-flex align-items-center justify-content-center my-5 flex-column">
            <h2 className='my-4'>Our Testimonial</h2>
            <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
                {/* card */}
                  <Card style={{ width: '18rem' }}  >
                      <Card.Body>
                          <Card.Text className='d-flex align-items-center justify-content-center flex-column my-2 '> 
                            <img width={'60ox'} height={'60px'} src={user1} alt="" />
                              
                              <div className='d-flex justify-content-center mt-3'>
                                ⭐⭐⭐⭐
                              </div>
                              <p style={{ textAlign: 'justify' }} className='mt-3'>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                              </p>
                          </Card.Text>
                      </Card.Body>
                  </Card>
                {/* card */}
                  <Card style={{ width: '18rem' }}>
                      <Card.Body>
                          <Card.Text className='d-flex align-items-center justify-content-center flex-column my-2'> 
                            <img width={'60ox'} height={'60px'} src={user2} alt="" />
                              
                              <div className='d-flex justify-content-center mt-3'>
                                ⭐⭐⭐⭐⭐
                              </div>
                              <p style={{ textAlign: 'justify' }} className='mt-3'>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                              </p>
                          </Card.Text>
                      </Card.Body>
                  </Card>
                {/* card */}
                  <Card style={{ width: '18rem' }}>
                      <Card.Body>
                          <Card.Text className='d-flex align-items-center justify-content-center flex-column my-2'> 
                            <img width={'60ox'} height={'60px'} src={user3} alt="" />
                              
                              <div className='d-flex justify-content-center mt-3'>
                                ⭐⭐⭐
                              </div>
                              <p style={{ textAlign: 'justify' }} className='mt-3'>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                              </p>
                          </Card.Text>
                      </Card.Body>
                  </Card>
            </div>
         </div>
    </>
  )
}

export default Home