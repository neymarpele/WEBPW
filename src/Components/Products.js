import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [cart, setCart] = useState([]); // Estado para el carrito

  const products = [
    { id: 1, name: 'Hewlett Packard 2024 Laptop', price: '$1.050.000 COP', description: 'Laptop HP de última generación', image: require('../images/pchp.png') },
    { id: 2, name: 'PlayStation 4 Blue Edition', price: '$780.000 COP', description: '1 TB de almacenamiento más 1 control. Incluye PS Network', image: require('../images/ps4.png') },
    { id: 3, name: 'SmartTV Samsung QLED 2024 NEO', price: '$1.750.000 COP', description: 'Televisor QLED de alta definición', image: require('../images/neo.png') },
    { id: 4, name: 'Hewlett Packard 2024 Laptop - Variante', price: '$1.050.000 COP', description: 'Otra variante de Laptop HP', image: require('../images/a35.png') },
    { id: 5, name: 'Alexa', price: '$450.000 COP', description: 'Asistente inteligente de Amazon', image: require('../images/alexa.png') },
    { id: 6, name: 'Tablet Samsung 2024', price: '$600.000 COP', description: 'Tablet con pantalla de alta definición', image: require('../images/tablet.png') },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} ha sido agregado al carrito!`); // Alerta simple
  };

  return (
    <div className="products-container">
      <h1>Productos Disponibles</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-title">{product.name}</h2>
            <p className="product-price">Precio: {product.price}</p>
            <p className="product-description">{product.description}</p>
            <button 
              className="product-button" 
              onClick={() => addToCart(product)}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
