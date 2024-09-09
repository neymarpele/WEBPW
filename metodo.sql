-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 07-05-2024 a las 16:48:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `metodo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo`
--

CREATE TABLE `metodo` (
  `id` int(10) NOT NULL,
  `nombrepelicula` varchar(200) NOT NULL,
  `descripcionpelicula` varchar(200) NOT NULL,
  `generopelicula` varchar(200) NOT NULL,
  `fechapelicula` varchar(200) NOT NULL,
  `duracionpelicula` varchar(200) NOT NULL,
  `imagenpelicula` varchar(500) NOT NULL,
  `videopelicula` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `metodo`
--

INSERT INTO `metodo` (`id`, `nombrepelicula`, `descripcionpelicula`, `generopelicula`, `fechapelicula`, `duracionpelicula`, `imagenpelicula`, `videopelicula`) VALUES
(1, 'Asesino ninja', 'Un asesino une fuerzas con una agente de la Europol a quien le había salvado la vida para atrapar al grupo de asesinos profesionales que lo entrenó.', ' Acción/Crimen', '2009', '1h 39m', '', ''),
(14, 'Euphoria', 'Un grupo de estudiantes de secundaria navega entre drogas, relaciones sexuales, traumas, redes sociales, amor y amistad.', 'Drama ', '2019', '1 temporada', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZ9Ez08WmozNpk69YPg8I4ja7Z4ZRUP4lxUQGuNNgz0VjwGrw4Wjwr4e0i9dcnAMNsytp', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `metodo`
--
ALTER TABLE `metodo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `metodo`
--
ALTER TABLE `metodo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
