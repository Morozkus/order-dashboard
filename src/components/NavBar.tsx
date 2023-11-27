import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Order Menu</Navbar.Brand>
            <Link to='/order'>Заказы</Link>
            <Link className='ms-3' to='/shop'>Меню</Link>
            <Link className='ms-auto' to='/admin'>Админка</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar