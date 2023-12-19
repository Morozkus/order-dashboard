import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
 return (
  <>
   <Navbar bg="dark" data-bs-theme="dark">
    <Container>
     <Link to={'/'}><Navbar.Brand>Order Menu</Navbar.Brand></Link>
     <Link to='/board'>Заказы</Link>
     <Link to='/shop'>Меню</Link>
    </Container>
   </Navbar>
  </>
 )
}

export default NavBar