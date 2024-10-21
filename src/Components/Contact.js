import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    contrasena: '',
    correo: '',
    telefono: '',
    archivo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'archivo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (ej. enviar a un servidor)
    console.log(formData);
    alert('Formulario enviado con éxito');
    setFormData({
      nombre: '',
      apellido: '',
      contrasena: '',
      correo: '',
      telefono: '',
      archivo: null,
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Please fill out the form to get in touch with us.</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          className="input"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          className="input"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="contrasena"
          className="input"
          placeholder="Contraseña"
          value={formData.contrasena}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          className="input"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          className="input"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="archivo"
          className="input"
          onChange={handleChange}
        />
        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
