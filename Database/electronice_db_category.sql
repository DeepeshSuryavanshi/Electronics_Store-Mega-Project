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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `Categoryid` int NOT NULL AUTO_INCREMENT,
  `Categoryname` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  PRIMARY KEY (`Categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (36,'What\'s New','dffb0d2d-cefa-4e34-bb53-0ed7aa8ec4d2.png'),(37,'Mobiles','d30b54b1-e07d-4ba5-b7d6-c996d862e6ce.png'),(38,'Laptops','8b6c46f9-703d-40cb-8fdd-e113df9c92b0.png'),(39,'Television','4e5558c3-08b5-4a7c-be8e-10ae6bba52f8.png'),(40,'Headphones &      Earphones','2e026387-4e20-4ec2-ba86-5d2b9b0b02aa.png'),(41,'Refrigerator','f561c1bc-fab3-4923-8556-c9de3be894aa.png'),(43,'Speakers &   Media Player','49348725-2389-44a1-add5-ce42a120ac76.png'),(45,'Home Theater & Soundbar','93e9aec1-5f75-4022-b662-56ac97d3e3e9.png'),(46,'Air Conditioner','2b319811-3139-412b-b4c4-7d9868eb4199.png'),(47,'Washing Machine','38e381f9-a4fb-4330-849c-f764049d56d6.png'),(48,'Kitchen Appliances','71d5c28d-c0fb-4625-903d-43a30339e7dd.png'),(49,'Grooming','76822369-40a4-4ea4-a1d3-8905d57bf2b4.png'),(50,'Tablates','1482e4a4-7716-4ecc-b9e4-6020f5c1090e.png'),(51,'Wearables','00710f1b-c8cf-4e73-b628-012f1d442336.png'),(52,'Water Purifiere','820d0b5a-7e51-4a29-af1f-b8dc3d9d8410.png'),(53,'Cameras','753d3701-0e7f-42f0-b2d3-3dfb11803baf.png'),(54,'Accessories','9d173d6b-ce85-4184-9463-1801a95ef2b1.png'),(55,'Gaming','1243ed1d-47be-4dc5-b96c-e5dc24f611e7.png'),(56,'Home Appliances','09783ebe-e831-4966-9d4e-8a7b45aa713e.png');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
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
