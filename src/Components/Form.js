import React, { useState } from 'react';
import './Form.css'; // Asegúrate de que la ruta sea correcta
import logo from '../images/flow.jpg'; // Ajusta la ruta según tu estructura de carpetas

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    contrasena: '',
    correo: '',
    telefono: '',
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'imagen') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nombre: '',
      apellido: '',
      contrasena: '',
      correo: '',
      telefono: '',
      imagen: null,
    });
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="input"
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          required
          className="input"
        />
        <input
          type="password"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          placeholder="Contraseña"
          required
          className="input"
        />
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Correo"
          required
          className="input"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          required
          className="input"
        />
        <input
          type="file"
          name="imagen"
          onChange={handleChange}
          accept="image/*"
          required
          className="input"
        />
        <button type="submit" className="button">Enviar</button>
      </form>
      <footer className="footer">
        <p>© 2024 Flow Colombia. Hecho Por Nicolas Barreto y Esteban Castro</p>
      </footer>
    </div>
  );
};

export default Form;
