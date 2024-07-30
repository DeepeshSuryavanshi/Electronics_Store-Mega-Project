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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `brandsid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `brandname` varchar(45) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`brandsid`),
  KEY `Categoryid_idx` (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (18,38,'HP','18a0b408-e784-4bd8-a212-43de659b4a31.webp'),(19,38,'Dell','a15aeea0-1009-4a12-ac3d-8dbaff310550.webp'),(20,36,'Amazon','db381c13-701b-4467-90c9-14482951069d.webp'),(21,38,'Apple','f9cc769a-4975-43e2-85f9-dfae4c380820.webp'),(22,45,'JBL','2a1911f6-aa08-4e58-b777-bb63701d7e6f.webp'),(23,56,'Croma','d76b82d2-e580-4d02-baf0-9627a741a65d.webp'),(24,38,'Lenovo','5bda468e-0fe0-455e-9b91-88deebcf18b5.webp'),(25,56,'LG','d72ac72c-836f-4c7d-855c-8091e2bf48e8.webp'),(26,39,'Samsung','051eaf24-6e97-4c2b-9771-79516de8a328.webp'),(27,37,'MI','1d7cc140-17b8-4987-9654-b58e1792614b.webp'),(28,37,'realme','affe731c-9e23-4725-a271-5327b579d433.webp'),(29,37,'OPPO','2a2e70bb-4d5d-47d7-9aeb-ecbdc2f5aec8.webp'),(30,40,'Panasonic','b412ce18-ee2a-46e4-9475-8fedc69ec35f.webp'),(31,49,'Phillips','82a06016-d9b2-4d39-bfb3-f4cbe37d65a9.webp'),(32,37,'Vivo','3496c12f-b9e9-41e4-842c-a0d0ad70acd1.webp'),(33,37,'Apple','8381ec48-e9b0-40a1-8935-35382222278b.webp'),(34,38,'acer','b950752f-ad1c-4a70-afff-2086595d8c9a.webp'),(35,40,'Boat','6fbb20f8-a718-4135-8f03-8ef1f3f4a954.webp');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-30 11:12:36
