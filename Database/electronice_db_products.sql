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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Categoryid` int NOT NULL,
  `brandsid` int NOT NULL,
  `productid` int NOT NULL AUTO_INCREMENT,
  `productname` text,
  `image` varchar(105) DEFAULT NULL,
  PRIMARY KEY (`productid`),
  KEY `Categoryid_idx` (`Categoryid`),
  KEY `brandsid_idx` (`brandsid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (38,18,8,' 14s-dr3003TU Intel Pentium Silver (14 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021','63d5da33-0678-4d5f-91dc-82d3a217154f.webp'),(37,33,10,'iPhone 15 Pro','0898ba91-cc7f-43b0-b836-40bb6d7cab37.webp'),(37,33,11,'iPhone 15 Pro Max (256GB, Natural Titanium)','50a32101-429b-4841-b4f7-79f12a0f37b1.webp'),(38,34,12,'One Z2-493 AMD Ryzen 3','9f2041dc-ffeb-4164-a835-11ad48dfa9ff.webp'),(45,22,13,'JBL Bar 820W Bluetooth Sound bar with Remote','68597792-2ae7-48da-9372-bd882981361c.webp'),(56,23,14,'Croma 6.5 kg 5 Star Fully Automatic Top Load Washing Machine','00032b8f-732f-4061-8390-00a519255628.webp'),(39,26,15,'Crystal 4K 108 cm (43 inch) 4K Ultra HD LED Tizen TV (2021 model)','aca5e837-c52f-4f9e-8dee-f016ef5d94d7.webp'),(38,21,16,'MacBook Pro 2023 (M3, 14.2 inch, 8GB, 512GB, macOS, Silver)','89c5435a-c5a2-4644-b841-1bcad9bf9d72.webp'),(38,21,17,'MacBook Pro 2020 (M2, 13.3 Inch, 8GB, 256GB, macOS Monterey, Silver)','34e8cb6e-3737-46dc-b2c4-16a096a6e259.webp'),(37,28,18,' 11 Pro Plus 5G (12GB RAM, 256GB, Sunrise Beige)','f8d029a1-526a-4ae0-b983-d12aeea834dd.webp'),(37,33,19,' iPhone 15 Pro Max (512GB, Black Titanium)','d22e9193-196f-49e0-9342-64829a0c0775.webp'),(40,30,20,'Buds Mini Pro ','ac108bac-981e-4d39-a16b-7875799e08f7.webp'),(45,22,21,'Club 700BT ','ed710bca-46c4-43b8-bc62-3f2ad23e5a27.webp'),(40,35,22,' Airdopes 100 TWS Earbuds ','3863e974-a126-4c8f-8e89-d14055d79448.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
