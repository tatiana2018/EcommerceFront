import React, { useState } from 'react';
import { Offcanvas, Nav, Navbar, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaBook, FaShoppingCart } from 'react-icons/fa';
import { SiApplemusic } from "react-icons/si";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menú</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="#home">
              <FaHome /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#profile">
              <FaUser /> Perfil
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/configurations">
              <FaCog /> Configuración
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#library">
              <FaBook /> Biblioteca
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#shop">
              <FaShoppingCart /> Tienda
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#shop">
              <SiApplemusic /> Música
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Button onClick={handleSidebarToggle}>
          <i className="bi bi-menu-up"></i>
        </Button>
        <Navbar.Brand href="#home" className='ms-2'>My Mind</Navbar.Brand>
      </Navbar>

      <Sidebar show={showSidebar} handleClose={handleSidebarToggle} />
    </div>
  );
};

export default App;
