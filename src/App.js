import React from 'react';
import { Navbar, Nav, NavDropdown, Carousel, Accordion, Col, Row } from 'react-bootstrap';
import ProductCard from './components/ProductCard';

import './App.css';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Buenos días';
  if (hour < 18) return 'Buenas tardes';
  return 'Buenas noches';
}

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar className="custom-navbar" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src="/img/logo.jpg" // Ruta directa desde la carpeta public
            width="90"
            height="90"
            className="d-inline-block align-top"
          />{' '}
          FLOW COLOMBIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Planes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#internet">Internet</NavDropdown.Item>
              <NavDropdown.Item href="#internet-tv-sin-deco">Internet + TV Básica HD</NavDropdown.Item>
              <NavDropdown.Item href="#internet-tv-sin-deco">Internet + TV Avanzada HD</NavDropdown.Item>
              <NavDropdown.Item href="#tv-internet">TV + Internet</NavDropdown.Item>
              <NavDropdown.Item href="#tv-internet-alexa">TV + Internet + Alexa</NavDropdown.Item>
              <NavDropdown.Item href="#tv-digital">TV Digital</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Productos" id="productos-nav-dropdown">
              <NavDropdown.Item href="#smart-tv">Flow Wifi</NavDropdown.Item>
              <NavDropdown.Item href="#consola-xbox">Flow Fibra Óptica</NavDropdown.Item>
              <NavDropdown.Item href="#muebles-modernos">Flow WiFi Prepago</NavDropdown.Item>
              <NavDropdown.Item href="#laptops">Flow Alexa</NavDropdown.Item>
              <NavDropdown.Item href="#smartphones">Smartphones</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Premium Pack" id="premium-nav-dropdown">
              <NavDropdown.Item href="#hbo-max">HBO Max</NavDropdown.Item>
              <NavDropdown.Item href="#netflix">Netflix</NavDropdown.Item>
              <NavDropdown.Item href="#disney-standard">Disney + Estándar</NavDropdown.Item>
              <NavDropdown.Item href="#disney-premium">Disney + Premium</NavDropdown.Item>
              <NavDropdown.Item href="#prime-video">Prime Video</NavDropdown.Item>
              <NavDropdown.Item href="#paramount-plus">Paramount +</NavDropdown.Item>
              <NavDropdown.Item href="#directv-go">DirecTV GO</NavDropdown.Item>
              <NavDropdown.Item href="#vix">VIX</NavDropdown.Item>
              <NavDropdown.Item href="#universal-plus">Universal +</NavDropdown.Item>
              <NavDropdown.Item href="#win-sports">Win Sports +</NavDropdown.Item>
              <NavDropdown.Item href="#hotpack">HotPack</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tienda" id="tienda-nav-dropdown">
              <NavDropdown.Item href="#smart-tv">SmartTV</NavDropdown.Item>
              <NavDropdown.Item href="#camaras-seguridad">Cámaras de Seguridad</NavDropdown.Item>
              <NavDropdown.Item href="#airpods">Airpods</NavDropdown.Item>
              <NavDropdown.Item href="#buds">Buds</NavDropdown.Item>
              <NavDropdown.Item href="#consolas">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#notebooks">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#computadores-gammers">Computadores Gamers</NavDropdown.Item>
              <NavDropdown.Item href="#smartwatch">SmartWatch</NavDropdown.Item>
              <NavDropdown.Item href="#smartphones">SmartPhones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sobre-nosotros">Que ver</Nav.Link>
            <Nav.Link href="#contacto">Ayuda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header className="App-header">
        <h1>{getGreeting()}, Disfruta todo el contenido las 24 hRS</h1>
        <p>Disfruta de TV, internet y streaming sin complicaciones.</p>

        {/* Carrusel */}
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/serie2.png"
              alt="Techno"
              style={{ objectFit: 'cover', height: '852px' }} // Ajusta el tamaño de la imagen
            />
            <Carousel.Caption>
              <h3>Series</h3>
              <p>Explora lo último en tecnología y gadgets innovadores.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/serie1.png"
              alt="Hogar"
              style={{ objectFit: 'cover', height: '852px' }} // Ajusta el tamaño de la imagen
            />
            <Carousel.Caption>
              <h3>Max</h3>
              <p>El mejor entretenimiento está en FLOW Colombia. Adquiere MAX por $16.900 lo pagas al tercer mes.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/champions.png"
              alt="Liga de Campeones"
              style={{ objectFit: 'cover', height: '852px' }} // Ajusta el tamaño de la imagen
            />
            <Carousel.Caption>
              <h3>Explora el Mundo del Fútbol</h3>
              <p>Disfruta de los mejores momentos de la Liga de Campeones con nuestra cobertura exclusiva a través de ESPN y Disney Plus.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Cards */}
        <div className="product-cards" style={{ marginTop: '2rem' }}>
          <Row>
            <Col md={4}>
              <ProductCard
                title="Smart TV"
                text="Disfruta de una experiencia visual sin igual con nuestra gama de televisores de alta definición."
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Consola Xbox"
                text="Sumérgete en los mejores juegos con nuestra selección de consolas de última generación."
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Muebles Modernos"
                text="Encuentra los muebles perfectos para complementar tu espacio con estilo y funcionalidad."
              />
            </Col>
          </Row>
        </div>

        {/* Acordeón */}
        <div className="accordion-container" style={{ marginTop: '2rem' }}>
          <h2>Más Información</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Quiénes somos?</Accordion.Header>
              <Accordion.Body>
                Flow es un servicio de TV y streaming que se encuentra operando en Colombia y en Argentina. En Flow podés encontrar TV en vivo, películas, series, deportes, música, eventos, contenido infantil, contenido para personas adultas y mucho más. Vas a poder suscribirte a packs de contenidos, plataformas de streaming y alquilar películas en Flow. Vas a poder encontrar, vivir y revivir todo el entretenimiento que quieras, en cualquier momento y lugar utilizando el dispositivo que prefieras.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Qué ofrecemos?</Accordion.Header>
              <Accordion.Body>
                Ofrecemos una amplia variedad de servicios de streaming y entretenimiento para toda la familia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Contáctanos</Accordion.Header>
              <Accordion.Body>
                Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través de nuestras redes sociales o nuestro formulario de contacto.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </header>

    </div>
  );
}

export default App;