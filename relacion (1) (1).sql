-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3308
-- Tiempo de generación: 08-10-2024 a las 23:31:41
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `relacion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actualizacion de datos`
--

CREATE TABLE `actualizacion de datos` (
  `id_metodo` int(150) NOT NULL,
  `nueva_contraseña` varchar(150) NOT NULL,
  `nuevo_nombre` varchar(150) NOT NULL,
  `nuevo_correo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_de_compras`
--

CREATE TABLE `carrito_de_compras` (
  `id_pedidos` int(150) NOT NULL,
  `Cantidad` varchar(150) NOT NULL,
  `precio` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id_factura` int(150) NOT NULL,
  `id_pedidos` int(150) NOT NULL,
  `id_usuario` int(150) NOT NULL,
  `id_metodo de pago` int(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inicio_de_sesion`
--

CREATE TABLE `inicio_de_sesion` (
  `id_usuario` int(150) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `telefono` varchar(150) NOT NULL,
  `contraseña` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodos_de_pagos`
--

CREATE TABLE `metodos_de_pagos` (
  `id_metodo_de_pago` int(150) NOT NULL,
  `Nequi` varchar(150) NOT NULL,
  `Mastercard` varchar(150) NOT NULL,
  `Bancolombia` varchar(150) NOT NULL,
  `Efecty` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas relacion`
--

CREATE TABLE `peliculas relacion` (
  `id` int(50) NOT NULL,
  `usuario` int(150) NOT NULL,
  `metodo` int(150) NOT NULL,
  `pagos` int(150) NOT NULL,
  `peliculas` int(150) NOT NULL,
  `Categorias` varchar(150) NOT NULL,
  `carrito_de_compras` int(150) NOT NULL,
  `factura` int(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas_categoria`
--

CREATE TABLE `peliculas_categoria` (
  `id_Categorias` varchar(150) NOT NULL,
  `series` varchar(150) NOT NULL,
  `peliculas` varchar(150) NOT NULL,
  `doramas` varchar(150) NOT NULL,
  `anime` varchar(150) NOT NULL,
  `contenido_de_stream` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actualizacion de datos`
--
ALTER TABLE `actualizacion de datos`
  ADD PRIMARY KEY (`id_metodo`);

--
-- Indices de la tabla `carrito_de_compras`
--
ALTER TABLE `carrito_de_compras`
  ADD PRIMARY KEY (`id_pedidos`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id_factura`),
  ADD KEY `id_pedidos` (`id_pedidos`,`id_usuario`,`id_metodo de pago`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_metodo de pago` (`id_metodo de pago`);

--
-- Indices de la tabla `inicio_de_sesion`
--
ALTER TABLE `inicio_de_sesion`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `metodos_de_pagos`
--
ALTER TABLE `metodos_de_pagos`
  ADD PRIMARY KEY (`id_metodo_de_pago`);

--
-- Indices de la tabla `peliculas relacion`
--
ALTER TABLE `peliculas relacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Categorias` (`usuario`,`metodo`,`pagos`,`peliculas`),
  ADD KEY `Categorias_2` (`Categorias`),
  ADD KEY `metodo` (`metodo`),
  ADD KEY `carrito_de_compras` (`carrito_de_compras`),
  ADD KEY `pagos` (`pagos`),
  ADD KEY `factura` (`factura`);

--
-- Indices de la tabla `peliculas_categoria`
--
ALTER TABLE `peliculas_categoria`
  ADD PRIMARY KEY (`id_Categorias`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actualizacion de datos`
--
ALTER TABLE `actualizacion de datos`
  MODIFY `id_metodo` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carrito_de_compras`
--
ALTER TABLE `carrito_de_compras`
  MODIFY `id_pedidos` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id_factura` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inicio_de_sesion`
--
ALTER TABLE `inicio_de_sesion`
  MODIFY `id_usuario` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodos_de_pagos`
--
ALTER TABLE `metodos_de_pagos`
  MODIFY `id_metodo_de_pago` int(150) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `peliculas relacion`
--
ALTER TABLE `peliculas relacion`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito_de_compras`
--
ALTER TABLE `carrito_de_compras`
  ADD CONSTRAINT `carrito_de_compras_ibfk_1` FOREIGN KEY (`id_pedidos`) REFERENCES `peliculas relacion` (`carrito_de_compras`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`id_pedidos`) REFERENCES `carrito_de_compras` (`id_pedidos`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `factura_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `inicio_de_sesion` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `factura_ibfk_3` FOREIGN KEY (`id_metodo de pago`) REFERENCES `metodos_de_pagos` (`id_metodo_de_pago`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `peliculas relacion`
--
ALTER TABLE `peliculas relacion`
  ADD CONSTRAINT `peliculas relacion_ibfk_1` FOREIGN KEY (`Categorias`) REFERENCES `peliculas_categoria` (`id_Categorias`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `peliculas relacion_ibfk_2` FOREIGN KEY (`usuario`) REFERENCES `inicio_de_sesion` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `peliculas relacion_ibfk_3` FOREIGN KEY (`metodo`) REFERENCES `actualizacion de datos` (`id_metodo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `peliculas relacion_ibfk_4` FOREIGN KEY (`pagos`) REFERENCES `metodos_de_pagos` (`id_metodo_de_pago`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `peliculas relacion_ibfk_5` FOREIGN KEY (`factura`) REFERENCES `factura` (`id_factura`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
