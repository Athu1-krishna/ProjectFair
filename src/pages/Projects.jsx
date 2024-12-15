import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../services/allAPI'


const Projects = () => {
  const [searchKey, setSearchKey] = useState("")
  const [allProjects, setAllProjects] = useState([])
  console.log(allProjects);
  useEffect(() => {
    getAllProjects()
  }, [searchKey])
  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await allProjectsAPI(reqHeader, searchKey)
        console.log(result);
        if (result.status == 200) {
          setAllProjects(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <Header/>
      <div className="container-fluid p-5">
        <div className="d-flex justify-content-between align-items-center pt-5 mt-5">
          <h1>All Projects</h1>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search projects by their language' className="form-control w-25" />
        </div>
        <Row className='mt-5 '>
          {
            allProjects?.length>0?
            allProjects?.map((project)=>(
              <Col key={project?._id} sm={12} md={6} lg={4} className='mb-3 '>
                <ProjectCard displayData={project}/>
              </Col>
            ))
            :
            <div className="fw-bolder text-danger">Projects not found!!!</div>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects