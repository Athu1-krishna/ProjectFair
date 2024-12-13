import React from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'
const View = () => {
  
  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h2 className='text-danger fw-bold'>All Projects</h2>
        <div><Add/></div>
      </div>
      <div className="mt-2">
        {/* Projects */}
        <div className="border rounded p-2 d-flex justify-content-between align-items-center mb-3">
          <h3>title</h3>
          <div className="d-flex align-items-center">
            <div>
              <Edit/>
              <button className="btn"><a href="" target='_blank'><i className="fa-brands fa-github"></i></a></button>
              <button className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View