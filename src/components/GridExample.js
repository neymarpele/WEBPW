// src/components/GridExample.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Define los datos de tus productos
const products = [
  {
    id: 1,
    title: "Producto 1",
    description: "Este es el primer producto. Tiene características asombrosas.",
    imageUrl: "https://via.placeholder.com/300x200?text=Producto+1", // URL de la imagen real
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Este es el segundo producto. Ofrece una gran relación calidad-precio.",
    imageUrl: "https://via.placeholder.com/300x200?text=Producto+2", // URL de la imagen real
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Este es el tercer producto. Ideal para tus necesidades diarias.",
    imageUrl: "https://via.placeholder.com/300x200?text=Producto+3", // URL de la imagen real
  },
  {
    id: 4,
    title: "Producto 4",
    description: "Este es el cuarto producto. Diseñado para ofrecer rendimiento y durabilidad.",
    imageUrl: "https://via.placeholder.com/300x200?text=Producto+4", // URL de la imagen real
  },
];

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Link href="#">Más detalles</Card.Link> {/* Puedes agregar enlaces o botones aquí */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
