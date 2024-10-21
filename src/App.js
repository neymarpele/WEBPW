import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Plans from './Components/Plans';
import Products from './Components/Products';
import PackagesPremium from './Components/PackagesPremium'; 
import Watch from './Components/Watch'; // Cambiado a Watch
import Contact from './Components/Contact';
import Help from './Components/Help';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/products" element={<Products />} />
        <Route path="/packages" element={<PackagesPremium />} />
        <Route path="/watch" element={<Watch />} /> {/* Nueva ruta para Watch */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
