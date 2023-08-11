"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../img/Maskgroup.svg"
import Image from 'next/image'

export const NavBar=()=>{
    return (
       <>
       
       <Navbar expand="lg" className="navbar navbar-dark bg-dark col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <Container>
        <Navbar.Brand href="#home"><Image src={logo} alt='Logo'/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end" >
            <Nav.Link href="#home">Indicadores</Nav.Link>
            <Nav.Link href="#link">Cerrar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       </>
 

    )
}