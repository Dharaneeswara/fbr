-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2024 at 06:53 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datapage`
--

-- --------------------------------------------------------

--
-- Table structure for table `datatable`
--

CREATE TABLE `datatable` (
  `id` int(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `datatable`
--

INSERT INTO `datatable` (`id`, `name`, `email`, `address`) VALUES
(1, 'Guna', 'guna@gmail.com', 'Kallakurichi District'),
(2, 'Dharaneeswaran', 'dharanI007@gmail.com', '1/30A, Adari main road, Porasakurichi Post, Porasakurichi Village, Kallakurichi District - 606203.'),
(3, 'Leanne Graham', 'Sincere@april.biz', 'Kulas Light, Gwenborough, 92998-3874'),
(4, 'Ervin Howell', 'Shanna@melissa.tv', 'Victor Plains, Wisokyburgh, 90566-7771'),
(5, 'Clementine Bauch', 'Nathan@yesenia.net', 'Douglas Extension, McKenziehaven, 59590-4157'),
(6, 'Patricia Lebsack', 'Julianne.OConner@kory.org', 'Hoeger Mall, South Elvis, 53919-4257'),
(7, 'Mrs. Dennis Schulist', 'Karley_Dach@jasper.info', 'Norberto Crossing, South Christy, 23505-1337'),
(8, 'Kurtis Weissnat', 'Telly.Hoeger@billy.biz', 'Rex Trail, Howemouth, 58804-1099'),
(9, 'Vengat', 'vengat@gmail.com', 'Perungudi, chennai'),
(10, 'VIP', 'vinay@gmail.com', 'Kizhorthoor, Cudalor distric'),
(11, 'Vijaya', 'vijaya@gmail.com', 'Asakalathoor, Cudalor distric'),
(12, 'Haribaskar', 'hari@gmail.com', 'kerala');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datatable`
--
ALTER TABLE `datatable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datatable`
--
ALTER TABLE `datatable`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
