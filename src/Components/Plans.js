import React, { useState } from 'react';
import './Plans.css';

const Plans = () => {
  const [cart, setCart] = useState([]); // Estado para el carrito de planes

  const plans = [
    {
      id: 1,
      name: 'TV Basic',
      price: '$79.000 COP',
      description: 'Acceso a más de 100 canales de TV por cable. 1 mes gratis de Win Mas Futbol y HBO. Acceso a 1 pantalla de Flow GO',
      image: require('../images/tvguide.png') // Asegúrate de tener esta imagen
    },
    {
        id: 2,
        name: 'Plan Gold',
        price: '$130.000 COP',
        description: 'Acceso a más de 150 canales incluye por 3 meses gratis de HBO, Universal y Win Mas Futbol. acceso a Flow GO',
        image: require('../images/soccer.png') // Asegúrate de tener esta imagen
      },
    {
      id: 3,
      name: 'TV Satelital',
      price: '$45.000 COP',
      description: 'Canales de alta definición y contenido exclusivo.',
      image: require('../images/st.jpg') // Asegúrate de tener esta imagen
    },
    {
      id: 3,
      name: 'Internet de Alta Velocidad',
      price: '$60.000 COP',
      description: 'Conexión de fibra óptica hasta 100 Mbps.',
      image: require('../images/wifi.png') // Asegúrate de tener esta imagen
    },
    {
      id: 4,
      name: 'WiFi Mesh',
      price: '$25.000 COP',
      description: 'Cobertura total en tu hogar con tecnología WiFi Mesh.',
      image: require('../images/mesh.png') // Asegúrate de tener esta imagen
    },
    {
      id: 5,
      name: 'Datos Móviles',
      price: '$15.000 COP',
      description: 'Paquete de datos móviles de 5GB para tu dispositivo.',
      image: require('../images/datos.png') // Asegúrate de tener esta imagen
    },
    {
      id: 6,
      name: 'Telefonía Fija',
      price: '$20.000 COP',
      description: 'Llamadas ilimitadas a números nacionales.',
      image: require('../images/telefonia.jpeg') // Asegúrate de tener esta imagen
    },
  ];

  const addToCart = (plan) => {
    setCart([...cart, plan]);
    alert(`${plan.name} ha sido agregado al carrito!`); // Alerta simple
  };

  return (
    <div className="plans-container">
      <h1>Planes Disponibles</h1>
      <div className="plans-grid">
        {plans.map(plan => (
          <div key={plan.id} className="plan-card">
            <img src={plan.image} alt={plan.name} className="plan-image" />
            <h2 className="plan-title">{plan.name}</h2>
            <p className="plan-price">Precio: {plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <button 
              className="plan-button" 
              onClick={() => addToCart(plan)}
              aria-label={`Agregar ${plan.name} al carrito`}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
