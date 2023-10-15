-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-09-2023 a las 05:26:05
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ciees_slisc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth`
--

CREATE TABLE `auth` (
  `ID_Usuario` int(10) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth`
--

INSERT INTO `auth` (`ID_Usuario`, `Usuario`, `Password`) VALUES
(1, 'Admin', '$2b$10$iB5O4yQqOV/BIdu//Ll.JOyL5iRmu.KfdtNOJzjf2BKBj4/KR17Iu'),
(2, 'Revisor', '$2b$10$Zc.Iv3wzjYtbMwTpvHwy6OSkBTJPCzFM5evlEhk8ubcJgP8p0IFxq'),
(3, 'Evaluador', '$2b$10$uJln4/P.PQlGTiVE9zEUNelCT1PHCEORYUlGIchfitViA5RNUxIg.'),
(4, 'Coordinador', '$2b$10$kPL/CdJWl5iP6MfvR3Rd8ezOp/6OAk0AcG2g05tcX4D75OT6xjDNG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `ID_Usuario` int(10) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Nivel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`ID_Usuario`, `Nombre`, `Nivel`) VALUES
(1, 'Administrador', 1),
(2, 'Revisor', 2),
(3, 'Evaluador del Programa', 4),
(4, 'Coordinador del Programa', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evidencias`
--

CREATE TABLE `evidencias` (
  `ID_Indicador` char(5) NOT NULL,
  `ID_Referencia` int(11) NOT NULL,
  `Texto` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `actualizado` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `evidencias`
--

INSERT INTO `evidencias` (`ID_Indicador`, `ID_Referencia`, `Texto`, `URL`, `actualizado`) VALUES
('2', 1, 'X', 'http://localhost:4000/uploads/1693877102468-1-1.jpg', '2023-09-01'),
('2', 2, 'A', 'http://localhost:4000/uploads/1693877102468-1-1.jpg', '2023-09-01'),
('1', 1, 'Misión, Visión y Valores', 'http://localhost:4000/uploads/1/1-1.jpeg', '2000-12-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evidencias_r`
--

CREATE TABLE `evidencias_r` (
  `ID_Indicador` char(5) NOT NULL,
  `ID_Referencia` int(11) NOT NULL,
  `Texto` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `actualizado` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `evidencias_r`
--

INSERT INTO `evidencias_r` (`ID_Indicador`, `ID_Referencia`, `Texto`, `URL`, `actualizado`) VALUES
('1', 1, 'Misión, Visión y Valores', 'http://localhost:4000/uploads/1/recomendacion/1-1.jpeg', '2022-12-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expedientes`
--

CREATE TABLE `expedientes` (
  `ID_Expediente` varchar(4) NOT NULL,
  `Expediente` varchar(70) DEFAULT NULL,
  `Fortaleza1` longtext DEFAULT NULL,
  `Fortaleza2` longtext DEFAULT NULL,
  `Fortaleza3` longtext DEFAULT NULL,
  `Estado_F` char(1) DEFAULT NULL,
  `fecha_F` date DEFAULT NULL,
  `Accion_Fortaleza1` longtext DEFAULT NULL,
  `Accion_Fortaleza2` longtext DEFAULT NULL,
  `Accion_Fortaleza3` longtext DEFAULT NULL,
  `Comentario1F` longtext DEFAULT NULL,
  `Comentario2F` longtext DEFAULT NULL,
  `Debilidad1` longtext DEFAULT NULL,
  `Debilidad2` longtext DEFAULT NULL,
  `Debilidad3` longtext DEFAULT NULL,
  `Estado_D` char(1) DEFAULT NULL,
  `fecha_D` date DEFAULT NULL,
  `Accion_Debilidad1` longtext DEFAULT NULL,
  `Accion_Debilidad2` longtext DEFAULT NULL,
  `Accion_Debilidad3` longtext DEFAULT NULL,
  `Comentario1D` longtext DEFAULT NULL,
  `Comentario2D` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `expedientes`
--

INSERT INTO `expedientes` (`ID_Expediente`, `Expediente`, `Fortaleza1`, `Fortaleza2`, `Fortaleza3`, `Estado_F`, `fecha_F`, `Accion_Fortaleza1`, `Accion_Fortaleza2`, `Accion_Fortaleza3`, `Comentario1F`, `Comentario2F`, `Debilidad1`, `Debilidad2`, `Debilidad3`, `Estado_D`, `fecha_D`, `Accion_Debilidad1`, `Accion_Debilidad2`, `Accion_Debilidad3`, `Comentario1D`, `Comentario2D`) VALUES
('1', 'Propósito del programa Misión y visión', '{\"ops\":[{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Estructura Clara\"},{\"attributes\":{\"bold\":true},\"insert\":\":\"},{\"insert\":\" El documento está bien estructurado, lo que facilita el proceso de evaluación y análisis del programa educativo.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Completitud\"},{\"attributes\":{\"bold\":true},\"insert\":\": \"},{\"insert\":\"Cubre múltiples aspectos cruciales como la transcripción de la misión y visión, la valoración por parte del equipo elaborador y documentos adjuntos, asegurando así que todos los elementos clave sean considerados.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Enfoque en Acciones\"},{\"attributes\":{\"bold\":true},\"insert\":\":\"},{\"insert\":\" La sección que trata sobre cómo la misión y la visión se convierten en acciones a realizar por los directivos es particularmente útil. Esto contribuye a un mejor entendimiento de cómo los objetivos abstractos se traducen en prácticas concretas.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Verificación y Congruencia\"},{\"attributes\":{\"bold\":true},\"insert\":\":\"},{\"insert\":\" El documento pide una valoración explícita de la congruencia entre la misión, la visión y los objetivos, lo cual es esencial para asegurar que todos los componentes del programa estén alineados.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Documentación\"},{\"attributes\":{\"bold\":true},\"insert\":\":\"},{\"insert\":\" La inclusión de una sección para documentos oficiales añade un nivel de rigor y formalidad al proceso, lo cual es beneficioso para la transparencia y la validación.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"}]}', '{}', '{}', '1', '2023-09-01', '{}', '{}', '{}', '{\"ops\":[{\"insert\":\"Sin comentarios.\\n\"}]}', '{\"ops\":[{\"insert\":\"Sin comentarios.\\n\"}]}', '{\"ops\":[{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Actualización y Relevancia\"},{\"insert\":\": Dado que se pide especificar quién y cuándo aprobó la misión y visión, esto podría ser una oportunidad para revisar y actualizar estos elementos, asegurando su relevancia y alineación con las necesidades actuales.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Comunicación\"},{\"attributes\":{\"bold\":true},\"insert\":\": \"},{\"insert\":\"La sección sobre medios de comunicación interna y externa ofrece la oportunidad de evaluar y mejorar cómo se comunica la misión y visión, no sólo dentro de la institución sino también al público en general.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Evaluación Continua\"},{\"attributes\":{\"bold\":true},\"insert\":\": \"},{\"insert\":\"La sección de valoración del equipo elaborador podría usarse como un punto de partida para un proceso de evaluación más amplio y continuo que incluya a todos los interesados (como profesores, estudiantes y empleadores).\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Integración de Tecnología\"},{\"attributes\":{\"bold\":true},\"insert\":\": \"},{\"insert\":\"La mención de la \\\"versión impresa o preferentemente electrónica\\\" para la visita de la CPAE sugiere que hay un reconocimiento de la utilidad de las herramientas digitales, lo cual podría ampliarse en el futuro.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"attributes\":{\"color\":\"var(--tw-prose-bold)\",\"bold\":true},\"insert\":\"Evidencia Adicional\"},{\"attributes\":{\"bold\":true},\"insert\":\":\"},{\"insert\":\" La sección de \\\"Información adicional\\\" permite a la institución mostrar iniciativas o logros que pueden no estar estrictamente vinculados a la misión y la visión, pero que sin embargo contribuyen al éxito general del programa.\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"\\n\"}]}', '{}', '{}', '1', '2023-09-01', '{}', '{}', '{}', '{\"ops\":[{\"insert\":\"Sin comentarios.\\n\"}]}', '{\"ops\":[{\"insert\":\"Sin comentarios.\\n\"}]}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `indicadores`
--

CREATE TABLE `indicadores` (
  `ID_Indicador` char(5) NOT NULL,
  `Aspectos` longtext DEFAULT NULL,
  `Descripción` longtext DEFAULT NULL,
  `Comentario1` longtext DEFAULT NULL,
  `Comentario2` longtext DEFAULT NULL,
  `Cumplimiento` int(11) DEFAULT NULL,
  `Estado` char(1) NOT NULL,
  `fecha` date DEFAULT NULL,
  `Recomendacion` longtext DEFAULT NULL,
  `Atencion_Rec` longtext DEFAULT NULL,
  `ComentarioR1` longtext DEFAULT NULL,
  `ComentarioR2` longtext DEFAULT NULL,
  `Avance_Rec` int(11) DEFAULT NULL,
  `Estado_Rec` char(1) DEFAULT NULL,
  `fecha_rec` date DEFAULT NULL,
  `consecutivo` int(11) DEFAULT NULL,
  `Titulo` text DEFAULT NULL,
  `ID_Expediente` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `indicadores`
--

INSERT INTO `indicadores` (`ID_Indicador`, `Aspectos`, `Descripción`, `Comentario1`, `Comentario2`, `Cumplimiento`, `Estado`, `fecha`, `Recomendacion`, `Atencion_Rec`, `ComentarioR1`, `ComentarioR2`, `Avance_Rec`, `Estado_Rec`, `fecha_rec`, `consecutivo`, `Titulo`, `ID_Expediente`) VALUES
('1', '{\"ops\":[{\"insert\":\"A) Descripción\"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nLa misión y la visión de un programa son la guía que permite dar claridad, orden, sentido y cohesión a todos los elementos que integran el programa. Son el para qué y el rumbo de un programa, en función del cumplimiento de los objetivos sustantivos de la propia institución; la misión tiene relación con el cumplimiento de los objetivos y metas establecidas en la formación profesional de cuadros especializados en determinadas disciplinas.\\n\\nB) Instrucciones\"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nTranscriba la misión y la visión (si existen) del programa educativo y/o sus objetivos. (sin máximo de palabras)\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"Especifique cuándo y por quién fue aprobado el documento que contiene la misión, visión u objetivos. No es válido incluir misión y visión institucionales, departamentales, etc. (sin máximo de palabras)\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"\\nC) Valoración del equipo elaborador \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nDescriba y valore cómo la misión, visión y/u objetivos del programa se convierten en acciones a realizar por los directivos. (máximo 150 palabras) \"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"Valore la congruencia entre la misión, visión y/u objetivos del programa con los objetivos del plan de estudios y su perfil de egreso. (máximo 150 palabras) \"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"Valore cómo se articulan estos tres elementos (misión, visión, objetivos del programa) en el desarrollo del programa. (máximo 150 palabras) \"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"Explique y valore cómo se verifica el cumplimiento de la misión, visión y/u objetivos del programa. (máximo 150 palabras) \"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"\\nD) Documentos. Adjuntar en formato PDF. \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nDocumentos oficiales con la misión y visión o los objetivos del programa. \"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Ejemplos de los medios de comunicación interna y externa de la misión y de la visión (por ejemplo, folletos, carteles, trípticos, sitio web, etcétera) \"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"\\nE) Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de la CPAE \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\nActa del cuerpo colegiado o documento oficial en que se asiente la aprobación de la misión y la visión institucionales. \"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"},{\"insert\":\"Agregar al listado cualquier evidencia adicional que considere relevante.\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\"}]}', '{\"ops\":[{\"insert\":\"B) Instrucciones \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\n\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\\n\"},{\"insert\":\"\\nC) Valoración del equipo elaborador \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\n\"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\\n\"},{\"insert\":\" \"},{\"attributes\":{\"list\":\"ordered\"},\"insert\":\"\\n\"},{\"insert\":\"\\nD) Documentos. Adjuntar en formato PDF. \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\n\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\\n\"},{\"insert\":\"\\nE) Información adicional que deberá estar disponible, en versión impresa o preferentemente electrónica, durante la visita de la CPAE \"},{\"attributes\":{\"header\":3},\"insert\":\"\\n\"},{\"insert\":\"\\n\"},{\"attributes\":{\"list\":\"bullet\"},\"insert\":\"\\n\\n\"},{\"insert\":\"\\n\"}]}', '{\"ops\":[{\"insert\":\"Sin comentarios\\n\"}]}', '{\"ops\":[{\"insert\":\"Sin comentarios\\n\"}]}', 0, '1', '2023-07-25', '{\"ops\":[{\"insert\":\"Al revisar y modificar la misión y la visión de un programa educativo, es esencial tener en cuenta varios aspectos para asegurar que se reflejen las metas, objetivos y valores del programa de manera efectiva.\\n\"}]}', '{\"ops\":[{\"insert\":\"Aún no se han realizado cambios.\\n\"}]}', '{\"ops\":[{\"insert\":\"En espera de cambios.\\n\"}]}', '{\"ops\":[{\"insert\":\"En espera de cambios.\\n\"}]}', 0, '1', '2023-07-25', NULL, 'Misión y visión del programa', '1'),
('2', '{}', '{}', '{}', '{}', 0, '4', '2023-07-25', '{}', '{}', '{}', '{}', 0, '1', '2023-07-25', NULL, 'Misión y visión del programa', '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listado2016`
--

CREATE TABLE `listado2016` (
  `Indicador` float DEFAULT NULL,
  `Aspectos` varchar(255) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Titulo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portada`
--

CREATE TABLE `portada` (
  `ID_Portada` int(10) NOT NULL,
  `Rector` varchar(100) DEFAULT NULL,
  `SecAcadC` varchar(100) DEFAULT NULL,
  `Director` varchar(100) DEFAULT NULL,
  `Correo_D` varchar(100) DEFAULT NULL,
  `Coordinador` varchar(100) DEFAULT NULL,
  `Correo_C` varchar(100) DEFAULT NULL,
  `Fecha_Elaboracion` varchar(100) DEFAULT NULL,
  `Fecha_Corte` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `portada`
--

INSERT INTO `portada` (`ID_Portada`, `Rector`, `SecAcadC`, `Director`, `Correo_D`, `Coordinador`, `Correo_C`, `Fecha_Elaboracion`, `Fecha_Corte`) VALUES
(1, 'DRA. TERESITA DE JESÚS RENDÓN HUERTA BARRERA', 'DR. SERGIO CANO ANDRADE', 'DR. JOSÉ AMPARO ANDRADE LUCIO', 'andrade@ugto.mx', 'DR. DANIEL ALBERTO RAZO MEDINA', 'darazo@ugto.mx', '01/09/2023', '01/09/2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sintesis1`
--

CREATE TABLE `sintesis1` (
  `Programa` varchar(100) DEFAULT NULL,
  `anterior` varchar(100) DEFAULT NULL,
  `Nivel` varchar(100) DEFAULT NULL,
  `Modalidad` varchar(100) DEFAULT NULL,
  `TipoEva` varchar(100) DEFAULT NULL,
  `CampusSede` varchar(100) DEFAULT NULL,
  `Dependencia` varchar(100) DEFAULT NULL,
  `Institucion` varchar(100) DEFAULT NULL,
  `Regimen` varchar(100) DEFAULT NULL,
  `Direccion` varchar(300) DEFAULT NULL,
  `Rector` varchar(100) DEFAULT NULL,
  `ResponsableProg` varchar(100) DEFAULT NULL,
  `ResponsableEva` varchar(100) DEFAULT NULL,
  `FechaAprobacion` varchar(100) DEFAULT NULL,
  `NoRegistroDGP` varchar(100) DEFAULT NULL,
  `NoREVOE` varchar(100) DEFAULT NULL,
  `MatriculaInst` int(11) DEFAULT NULL,
  `MatriculaSede` int(11) DEFAULT NULL,
  `periodicidad` varchar(15) DEFAULT NULL,
  `TipoCiclo` varchar(15) DEFAULT NULL,
  `NoCiclos` int(11) DEFAULT NULL,
  `CreditosOb` int(11) DEFAULT NULL,
  `CreditosOpt` int(11) DEFAULT NULL,
  `CreditosTotal` int(11) DEFAULT NULL,
  `DenominacionPlan` varchar(100) DEFAULT NULL,
  `OtrosPlanes` varchar(100) DEFAULT NULL,
  `UltimaGeneracion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sintesis1`
--

INSERT INTO `sintesis1` (`Programa`, `anterior`, `Nivel`, `Modalidad`, `TipoEva`, `CampusSede`, `Dependencia`, `Institucion`, `Regimen`, `Direccion`, `Rector`, `ResponsableProg`, `ResponsableEva`, `FechaAprobacion`, `NoRegistroDGP`, `NoREVOE`, `MatriculaInst`, `MatriculaSede`, `periodicidad`, `TipoCiclo`, `NoCiclos`, `CreditosOb`, `CreditosOpt`, `CreditosTotal`, `DenominacionPlan`, `OtrosPlanes`, `UltimaGeneracion`) VALUES
('Licenciatura en Ingeniería en Sistemas Computacionales', '', 'Licenciatura', 'Escolarizada', 'Evaluación Diagnóstica', 'Campus Irapuato-Salamanca', 'División de Ingenierías', 'Universidad de Guanajuato', 'Público', 'Carretera Salamanca - Valle de Santiago Km. 3.5 + 1.8, CP 36885; Comunidad de Palo Blanco; Salamanca, Gto.', 'Dr. Armando Gallegos Muñoz', 'Dr. Daniel Alberto Razo Medina', 'Mtro. Juan Ledezma', '', '', '', 0, 0, '', 'Semestral', 0, 0, 0, 0, '', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`ID_Usuario`);

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD PRIMARY KEY (`ID_Usuario`);

--
-- Indices de la tabla `evidencias`
--
ALTER TABLE `evidencias`
  ADD KEY `ID_Indicador` (`ID_Indicador`);

--
-- Indices de la tabla `evidencias_r`
--
ALTER TABLE `evidencias_r`
  ADD KEY `ID_Indicador` (`ID_Indicador`);

--
-- Indices de la tabla `expedientes`
--
ALTER TABLE `expedientes`
  ADD PRIMARY KEY (`ID_Expediente`);

--
-- Indices de la tabla `indicadores`
--
ALTER TABLE `indicadores`
  ADD PRIMARY KEY (`ID_Indicador`);

--
-- Indices de la tabla `portada`
--
ALTER TABLE `portada`
  ADD PRIMARY KEY (`ID_Portada`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `portada`
--
ALTER TABLE `portada`
  MODIFY `ID_Portada` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `evidencias`
--
ALTER TABLE `evidencias`
  ADD CONSTRAINT `evidencias_ibfk_1` FOREIGN KEY (`ID_Indicador`) REFERENCES `indicadores` (`ID_Indicador`);

--
-- Filtros para la tabla `evidencias_r`
--
ALTER TABLE `evidencias_r`
  ADD CONSTRAINT `evidencias_r_ibfk_1` FOREIGN KEY (`ID_Indicador`) REFERENCES `indicadores` (`ID_Indicador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
