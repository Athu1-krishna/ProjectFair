import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenContext } from '../contexts/TokenAuth'
const Header = ({ insideDashboard }) => {
  const { authorizedUser, setAuthorizedUser } = useContext(tokenContext)
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear()
    setAuthorizedUser(false)
    navigate('/')
  }
  return (
    <Navbar style={{zIndex:'1'}} className="bg-info-subtle position-fixed w-100">
      <Container>
        <Navbar.Brand >
          <Link to={'/'} className='text-decoration-none'><i className="fa-brands fa-docker"></i>ProjectFair</Link>
        </Navbar.Brand>
        {
          insideDashboard &&
          <button onClick={logout} className="btn btn-link fw-bolder text-decoration-none ">Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
        }
      </Container>
    </Navbar>
  )
}

export default Header