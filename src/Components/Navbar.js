import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">SmartHogar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Planes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/planes">Planes</NavDropdown.Item>
                        <NavDropdown.Item href="/paquetes-premium">Paquetes Premium</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/productos">Productos</Nav.Link>
                    <Nav.Link href="/tienda">Tienda</Nav.Link>
                    <Nav.Link href="/contacto">Contacto</Nav.Link>
                    <Nav.Link href="/quever">Que ver</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
