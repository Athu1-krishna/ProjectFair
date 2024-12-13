import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
const Projects = () => {
  return (
    <>
      <Header/>
      <div className="container-fluid p-5">
        <div className="d-flex justify-content-between align-items-center ">
          <h1>All Projects</h1>
          <input type="text" placeholder='Search projects by their language' className="form-control w-25" />
        </div>
        <Row className='mt-5 '>
          <Col sm={12} md={6} lg={4} className='mb-3 '>
            <ProjectCard/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Projects