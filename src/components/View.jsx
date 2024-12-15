import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { deleteProjectAPI, userProjectsAPI } from '../services/allAPI'
import { addProjectContext, editProjectContext } from '../contexts/ContextShare'
const View = () => {
  const { editProjectResponse, setEditProjectResponse } = useContext(editProjectContext)
  const { addProjectResponse, setAddProjectResponse } = useContext(addProjectContext)
  const [userProject, setUserProject] = useState([])

  useEffect(()=>{
    getUserProjects()
  }, [addProjectResponse, editProjectResponse])

  const getUserProjects = async () => {
    const token = sessionStorage.getItem('token')
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await userProjectsAPI(reqHeader)
        console.log(result);
        if(result.status == 200){
          setUserProject(result.data)
        }
        
      }catch(err){
        console.log(err);
        
      }
    }
  }

  const removeProject = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteProjectAPI(id, reqHeader)
        if (result.status == 200) {
          getUserProjects()
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h2 className='text-danger fw-bold'>All Projects</h2>
        <div><Add/></div>
      </div>
      <div className="mt-2">
        {/* Projects */}
       {
        userProject?.length>0?
        userProject?.map((project)=>(
          <div key={project?._id} className="border rounded p-2 d-flex justify-content-between align-items-center mb-3">
            <h3>{project?.title}</h3>
            <div className="d-flex align-items-center">
              <div>
                <Edit project={project}/>
                <button className="btn"><a href={project?.github} target='_blank'><i className="fa-brands fa-github"></i></a></button>
                <button onClick={()=>removeProject(project?._id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
            </div>
          </div>
        ))
        :
        <div className="fw-bolder fs-3">You haven't uploaded any projects yet... Upload your project!</div>
       }
      </div>
    </>
  )
}

export default View