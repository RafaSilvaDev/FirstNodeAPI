-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2023 at 02:41 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `world_cup_node_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `selecao`
--

CREATE TABLE `selecao` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `grupo` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `selecao`
--

INSERT INTO `selecao` (`id`, `nome`, `grupo`) VALUES
(2, 'Holanda', 'A'),
(3, 'Equador', 'A'),
(4, 'Catar', 'A'),
(5, 'Brasil', 'G'),
(6, 'Suíça', 'G'),
(7, 'Argentina', 'C'),
(9, 'Polônia', 'C'),
(10, 'Inglaterra', 'B'),
(15, 'Coréia do Sul', 'F');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `selecao`
--
ALTER TABLE `selecao`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `selecao`
--
ALTER TABLE `selecao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
