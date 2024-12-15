import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import SERVER_BASE_URL from '../services/serverURL';

const ProjectCard = ({ displayData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='btn shadow'>
        <Card.Img height={'200px'} variant="top" src={`${SERVER_BASE_URL}/uploads/${displayData?.projectImage}`} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
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
              <img className='img-fluid' src={`${SERVER_BASE_URL}/uploads/${displayData?.projectImage}`} alt="Project image" />
            </div>
            <div className="col-lg-6">
              <h2 className='text-success'>{displayData?.title}</h2>
              <p className='fw-bold'>Languages used : <span className='text-danger'>{displayData?.languages}</span></p>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'> Overview : </span> {displayData?.overview}</p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href={displayData?.github} target='_blank' className='btn bg-body-secondary me-2 hover:shadow '><i className="fa-brands fa-github fs-4 "></i></a>
            <a href={displayData?.website} target='_blank' className='btn bg-body-secondary hover:shadow '><i className="fa-solid fa-link fs-4"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard