import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PackagesPremium.css'; // Asegúrate de crear un archivo CSS para estilos específicos de este componente

const PackagesPremium = () => {
  // Ejemplo de datos de paquetes premium
  const premiumPackages = [
    {
      id: 1,
      title: 'Amazon Prime Video',
      description: 'Disfruta de las mejores series y peliculas al alcance de tu casa o tu movil solo suscribienddote a Flow',
      price: '$10.900 COP/mes',
      image: '/images/premium-gold.jpg', // Asegúrate de tener esta imagen en tu carpeta de imágenes
    },
    {
      id: 2,
      title: 'Win Mas Futbol',
      description: 'Emocionate con lo mejor del Futbol Colombiano, las jugadas de CR7 en la Saudi Pro League y lo mejor de la Coppa Italia en Win Mas.',
      price: '$30.000 COP/mes',
      image: '/images/premium-silver.jpg',
    },
    {
      id: 3,
      title: 'Disney +',
      description: 'Accede a lo mejor de MARVEL, Natgeo, Disney. No te pierdas lo mejor del deporte mundial y la temporada 35 de los simpson',
      price: '$12.5000 COP/mes',
      image: '/images/premium-bronze.jpg',
    },
    {
      id: 4,
      title: 'VIX basico y premium',
      description: 'Recuerdas las mejores novelas , peliculas mexicanas y las series  esta en un solo lugar en  VIX. Tambien puedes acceder 24/7 a la casa de los famosos',
      price: '$6.500 COP/mes',
      image: '/images/premium-bronze.jpg',
    },
    {
      id: 5,
      title: 'Paramount Plus',
      description: 'Disfruta todo el contenido de MTV, Nickelodeon en una sola aplicacion. Ademas pagas a parti del segundo mes',
      price: '$12.5000 COP/mes',
      image: '/images/premium-bronze.jpg',
    },
  ];

  return (
    <Container className="packages-premium">
      <h2 className="text-center my-5">Paquetes Premium</h2>
      <Row>
        {premiumPackages.map((pkg) => (
          <Col key={pkg.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={pkg.image} alt={pkg.title} />
              <Card.Body>
                <Card.Title>{pkg.title}</Card.Title>
                <Card.Text>{pkg.description}</Card.Text>
                <h4 className="text-primary">{pkg.price}</h4>
                <Button variant="primary">Suscribirse</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PackagesPremium;
