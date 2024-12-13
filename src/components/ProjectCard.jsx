import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='btn shadow'>
        <Card.Img height={'200px'} variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Project Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="" alt="Project image" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h5>Languages used <span className='text-danger'>Languages</span></h5>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'> Overview : </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime odio animi repellendus ipsam laboriosam reprehenderit bl</p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://react-bootstrap.netlify.app/docs/components/modal" target='_blank' className='btn bg-body-secondary me-2 hover:shadow '><i className="fa-brands fa-github fs-4 "></i></a>
            <a href="https://react-bootstrap.netlify.app/docs/components/modal" target='_blank' className='btn bg-body-secondary hover:shadow '><i className="fa-solid fa-link fs-4"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard