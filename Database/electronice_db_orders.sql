-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: electronice_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `ordersno` int NOT NULL AUTO_INCREMENT,
  `orderdate` varchar(45) DEFAULT NULL,
  `productdetailid` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `paymentstatus` varchar(45) DEFAULT NULL,
  `deliverystatus` varchar(45) DEFAULT NULL,
  `amount` varchar(45) DEFAULT NULL,
  `mobileno` varchar(15) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `adderss` text,
  PRIMARY KEY (`ordersno`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2024-01-20 21:55:48.302',19,1,'pay_NQvqMxuyDGw4OY','Undelivered','679','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(2,'2024-01-20 22:02:15.766',19,1,'pay_NQvx5UWA2kWoHJ','Undelivered','679','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(3,'2024-01-20 22:44:55.430',19,1,'pay_NQwgEd8gNmsV5f','Undelivered','7673','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(5,'2024-01-23 20:14:16.659',22,1,'pay_NS5iPd5dQFO5Oi','Undelivered','999','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(6,'2024-01-25 10:48:48.360',22,2,'pay_NSj9OgCKHFrfXS','Undelivered','1998','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(7,'2024-01-25 20:13:21.741',22,1,'pay_NSslkdK8Hmmnxv','Undelivered','999','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(8,'2024-02-14 17:33:42.794',22,1,'pay_NakjWOHtou3KZy','Undelivered','999','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P '),(9,'2024-03-15 12:59:50.830',22,1,'pay_NmY5nxU0pRaNV5','Undelivered','999','9510815519','heamtsuryavanshi55@gmail.com','Hemant  9510815519 Suryavanshi',NULL),(10,'2024-03-25 17:45:44.604',6,1,'pay_NqaJ1OU2BGhosc','Undelivered','27891','8516815519','Deepeshsuryavanshi56@gmail.com','Deepesh Singh  Suryavanshi','Hanuman Ganj Danda , Dabra, M.P ');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-30 11:12:35
