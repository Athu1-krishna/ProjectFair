import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import projectImg from '../assets/uploadProjectImg.png'

const Edit = () => {
  const [show, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
     <>
       <button onClick={handleShow} className="btn "><i className="fa-solid fa-edit"></i></button>
 
       <Modal
         size='lg'
         centered
         show={show}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
       >
         <Modal.Header closeButton>
           <Modal.Title>Edit Project Details</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             <div className="row align-item-center">
               <div className="col-lg-4 p-5">
                 <label>
                   <input type="file" style={{display:'none'}} />
                   <img src={projectImg} height={'200px'} alt="" />
                 </label>
                 <div className="text-warning">*Upload only the following file types (.jpg, .png, .jpeg) here!!!</div>
               </div>
               <div className="col-lg-8 p-5">
                 <div className="mb-2">
                   <input type="text" className='form-control' placeholder='Project Title' />
                 </div>
                 <div className="mb-2">
                   <input type="text" className='form-control' placeholder='Project Language' />
                 </div>
                 <div className="mb-2">
                   <input type="text" className='form-control' placeholder='Project Overview' />
                 </div>
                 <div className="mb-2">
                   <input type="text" className='form-control' placeholder='Project Github Link' />
                 </div>
                 <div className="mb-2">
                   <input type="text" className='form-control' placeholder='Project Website Link' />
                 </div>
               </div>
             </div>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Cancel
           </Button>
           <Button variant="primary">Update</Button>
         </Modal.Footer>
       </Modal>
     </>
   )
}

export default Edit