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
-- Table structure for table `top categories`
--

DROP TABLE IF EXISTS `top categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `top categories` (
  `topcategoriesid` int NOT NULL AUTO_INCREMENT,
  `topcategoriesname` varchar(45) DEFAULT NULL,
  `topcategoriesimage` text,
  PRIMARY KEY (`topcategoriesid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `top categories`
--

LOCK TABLES `top categories` WRITE;
/*!40000 ALTER TABLE `top categories` DISABLE KEYS */;
INSERT INTO `top categories` VALUES (1,'Accessories','f82f595a-4169-46f4-b891-73790f2c0a4e.webp'),(2,'Home Appliance','54caef6c-e54d-427c-8da0-2180f92ec6a9.webp'),(3,'Computers & Tablets','b57b578f-4c3e-4596-96fa-18ad70e3b24d.webp'),(4,'Kitchen Appliances','228b4d76-bcf7-4649-b224-6681449e33b0.webp'),(5,'Phones & Wearables','9b9e161c-c6c8-402b-9fdf-e5d01b622b83.webp'),(6,'Televisions & Accessories','a960f2d0-1d44-4421-9f80-e0de60b3a99e.webp'),(7,'Cameras & Accessories','1d333d74-49c2-41b3-8065-5832f69cab2b.webp'),(8,'Audio & Video','312ca0e2-257b-4e1e-aa23-ffc53ba2ea31.webp'),(9,'Gaming','57957b39-3be9-4c62-8b03-5776943a26cb.webp'),(10,'Grooming & Personal care','7253b894-4ae8-4a7d-9f34-5bf43025727f.webp'),(11,'Health & Fitness','82d81377-05c4-4bbf-a9ab-e0d579ce0679.webp'),(12,'Smart Devices','20bf93e5-20d8-4a95-b567-5b2bfe30c47c.webp');
/*!40000 ALTER TABLE `top categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-30 11:12:34
