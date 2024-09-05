import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ title, text }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);

export default ProductCard;
