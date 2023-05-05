-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28 أبريل 2023 الساعة 00:12
-- إصدار الخادم: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biddinghub`
--

-- --------------------------------------------------------

--
-- بنية الجدول `auctions`
--

CREATE TABLE `auctions` (
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `description` varchar(2000) CHARACTER SET utf8 NOT NULL,
  `category` varchar(50) CHARACTER SET utf8 NOT NULL,
  `start_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `start_price` double NOT NULL,
  `curr_price` double NOT NULL,
  `winner_email` varchar(200) DEFAULT NULL,
  `seller_email` varchar(200) NOT NULL,
  `status` varchar(200) CHARACTER SET utf8 NOT NULL,
  `auction_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- إرجاع أو استيراد بيانات الجدول `auctions`
--

INSERT INTO `auctions` (`name`, `description`, `category`, `start_date`, `finish_date`, `start_price`, `curr_price`, `winner_email`, `seller_email`, `status`, `auction_id`) VALUES
('Head Phone', '\r\nBrand	Bose\r\nModel name	Bose QuietComfort 46\r\nColour	Black\r\nForm factor	Over Ear\r\nConnectivity technology	Wireless\r\nWireless communication technologies	Bluetooth\r\nSpecial features	Sweatproof, Fast Charging, Microphone Included\r\nIncluded components	Cable\r\nAge range (description)	Adult\r\nMaterial	Plastic\r\n\r\nNoise cancelling headphones are back, with world-class quiet, lightweight materials\r\nLong battery life ? Listen for up to 6 hours on a single charge.\r\nBluetooth Wireless Noise Canceling Headphones\r\nsuitable weight\r\nitem package weight: 0.7\r\n', 'electronics', '2023-05-01', '2023-05-04', 3500, 4000, NULL, 'hazemhany55@gmail.com', 'running', 1);

-- --------------------------------------------------------

--
-- بنية الجدول `auctions_trading`
--

CREATE TABLE `auctions_trading` (
  `email` varchar(200) NOT NULL,
  `price` double NOT NULL,
  `auction_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- إرجاع أو استيراد بيانات الجدول `auctions_trading`
--

INSERT INTO `auctions_trading` (`email`, `price`, `auction_id`) VALUES
('hazemhany55@gmail.com', 3500, 1),
('mahmoudmohamed33@gmail.com', 4000, 1);

-- --------------------------------------------------------

--
-- بنية الجدول `users`
--

CREATE TABLE `users` (
  `name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `email` varchar(200) CHARACTER SET latin1 NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 NOT NULL,
  `phone_num` bigint(20) NOT NULL,
  `status` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT 'in-active',
  `type` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii COLLATE=ascii_general_nopad_ci;

--
-- إرجاع أو استيراد بيانات الجدول `users`
--

INSERT INTO `users` (`name`, `email`, `password`, `phone_num`, `status`, `type`) VALUES
('ahmed mohamed', 'ahmedmohamed@gmail.com', '$2y$10$85HZWd2I22wsBfWoTCMZUeVrRN6JFOqdF3MhBoaCnPrkHkyu394ri', 201060203632, 'in-active', 'bidder'),
('hazem hany', 'hazemhany55@gmail.com', '$2y$10$9CItXm8ynE40Ay5zBaLsNOEQqJG7fvUQBqro1K4vWbuDJ8S0ygDTy', 201255415796, 'active', 'seller'),
('mahmoud mohamed', 'mahmoudmohamed33@gmail.com', '$2y$10$KzoXu2h90Qg2TfpXWQa1cOy02PK9QdNihsnwnglQ8Wk/6NhFfk5vK', 201165849532, 'active', 'bidder'),
('osama eid', 'osamaeid0101@gmail.com', '$2y$10$Y10/g9U7GkwsWwyg0mzcCuxsP8bjBKVxauXgzkajYGXcnqbN5k0F2', 201142014769, 'active', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auctions`
--
ALTER TABLE `auctions`
  ADD PRIMARY KEY (`auction_id`),
  ADD KEY `winner_email` (`winner_email`),
  ADD KEY `seller_email` (`seller_email`);

--
-- Indexes for table `auctions_trading`
--
ALTER TABLE `auctions_trading`
  ADD KEY `auctions_trading_ibfk_1` (`email`),
  ADD KEY `auctions_trading_ibfk_2` (`auction_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auctions`
--
ALTER TABLE `auctions`
  MODIFY `auction_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- قيود الجداول المحفوظة
--

--
-- القيود للجدول `auctions`
--
ALTER TABLE `auctions`
  ADD CONSTRAINT `auctions_ibfk_1` FOREIGN KEY (`winner_email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `auctions_ibfk_2` FOREIGN KEY (`seller_email`) REFERENCES `users` (`email`);

--
-- القيود للجدول `auctions_trading`
--
ALTER TABLE `auctions_trading`
  ADD CONSTRAINT `auctions_trading_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `auctions_trading_ibfk_2` FOREIGN KEY (`auction_id`) REFERENCES `auctions` (`auction_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
