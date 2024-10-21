import React from 'react';
import { Nav, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import carousel1 from '../images/eraseunavez.jpg'; // Ruta correcta de la imagen
import river from '../images/river.jpg'; // Ruta correcta de la imagen
import carousel3 from '../images/netflix.jpg'; // Ruta correcta de la imagen
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <Nav variant="pills" defaultActiveKey="/" className="navbar">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/plans">Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/packages">Packages Premium</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/watch">Que Ver</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/form">Form</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/help">Help</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Carousel */}
      <Carousel interval={3000} pause="hover" className="mt-4">
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>Primera Imagen</h3>
            <p>Descripción para la primera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={river} alt="Second slide" />
          <Carousel.Caption>
            <h3>Segunda Imagen</h3>
            <p>Descripción para la segunda imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Tercera Imagen</h3>
            <p>Descripción para la tercera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Buttons */}
      <div className="text-center mt-4">
        <Button as={Link} to="/form" variant="primary" className="button">Ir al Formulario</Button>
        <Button as={Link} to="/plans" variant="secondary" className="button">Ver Plans</Button>
        <Button as={Link} to="/products" variant="secondary" className="button">Ver Products</Button>
      </div>

      {/* Información adicional */}
      <div className="info-section mt-4">
        <h2>Bienvenido a Nuestro Servicio</h2>
        <h3>Ofrecemos:</h3>
        <ul>
          <li>Planes de TV por Cable</li>
          <li>Planes de TV Satelital</li>
          <li>Internet de Alta Velocidad</li>
          <li>Wi-Fi Mesh para Cobertura Completa</li>
          <li>Datos Móviles</li>
          <li>Telefonía Fija</li>
        </ul>
      </div>

      {/* Derechos reservados */}
      <div className="footer-info text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados por Flow colombia , Nicolas Barreto y Esteban Castro.</p>
        <p>
          <Link to="/terms">Términos y condiciones</Link> | 
          <Link to="/privacy"> Política de privacidad</Link> |
          <Link to="Working">Trabaja con Nosotros </Link> |
          <Link to="Ethical">Codigo de Etica</Link> |
          <Link to="Promised">Compromiso social</Link> |
          <Link to="Maps">Mapa de Sitio</Link> |
        </p>
      </div>
    </div>
  );
};

export default Home;
