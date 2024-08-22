import React from 'react';
import { Navbar, Nav, Carousel, Accordion } from 'react-bootstrap';
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
        <Navbar.Brand href="#home">SmartHogar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#categorias">Categorías</Nav.Link>
            <Nav.Link href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header className="App-header">
        <h1>{getGreeting()}, Bienvenido a la tienda de artículos de hogar y tecnología</h1>
        <p>La mejor página del mundo de la tecnología y el hogar</p>

        {/* Carrusel */}
        <Carousel fade>
          <Carousel.Item>
            <div className="d-block w-100" style={{ height: '500px', backgroundColor: '#000' }} />
            <Carousel.Caption>
              <h3>Televisores, Buds, Computadores, Consolas y Celulares</h3>
              <p>Experimenta el mejor rendimiento con nuestros smart TVs, consolas de última generación, computadores y celulares.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100" style={{ height: '500px', backgroundColor: '#111' }} />
            <Carousel.Caption>
              <h3>Artículos para el Hogar</h3>
              <p>Descubre y analiza los mejores artículos para tu casa u oficina.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100" style={{ height: '500px', backgroundColor: '#222' }} />
            <Carousel.Caption>
              <h3>Accesorios de Calidad</h3>
              <p>Ven, aprovecha y compra los mejores accesorios para tu hogar y para tus elementos tecnológicos.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        {/* Acordeón */}
        <div className="accordion-container" style={{ marginTop: '2rem' }}>
          <h2>Más Información</h2>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Quiénes somos?</Accordion.Header>
              <Accordion.Body>
                Somos una tienda dedicada a ofrecer artículos de tecnología y hogar de la mejor calidad. Nuestro objetivo es brindar a nuestros clientes una experiencia de compra excepcional.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Qué ofrecemos?</Accordion.Header>
              <Accordion.Body>
                Ofrecemos una amplia variedad de productos, desde electrodomésticos hasta accesorios tecnológicos. Siempre estamos actualizando nuestro inventario con las últimas tendencias.
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

      <footer className="App-footer">
        <p>© 2024 SmartHogar. Todos los derechos reservados. By Nicolas Barreto</p>
        <p>Síguenos en nuestras redes sociales: Facebook | TikTok | Instagram | WhatsApp</p>
      </footer>
    </div>
  );
}

export default App;
