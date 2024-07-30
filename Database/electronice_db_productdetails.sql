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
-- Table structure for table `productdetails`
--

DROP TABLE IF EXISTS `productdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productdetails` (
  `categoryid` int NOT NULL,
  `brandid` int NOT NULL,
  `productid` int NOT NULL,
  `productdetailsid` int NOT NULL AUTO_INCREMENT,
  `modelno` text,
  `description` text,
  `color` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `offerprice` int DEFAULT NULL,
  `HSNcode` varchar(70) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `image` text,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`productdetailsid`),
  KEY `categoryid_idx` (`categoryid`),
  KEY `brandsid_idx` (`brandid`),
  KEY `productid_idx` (`productid`),
  CONSTRAINT `brandsid` FOREIGN KEY (`brandid`) REFERENCES `brands` (`brandsid`),
  CONSTRAINT `categoryid` FOREIGN KEY (`categoryid`) REFERENCES `category` (`Categoryid`),
  CONSTRAINT `productid` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productdetails`
--

LOCK TABLES `productdetails` WRITE;
/*!40000 ALTER TABLE `productdetails` DISABLE KEYS */;
INSERT INTO `productdetails` VALUES (40,18,8,6,'832T7PA','<h2>Intel Pentium Silver (14 inch, 8GB, 512GB, Windows 11 Home, MS Office 2021, Intel UHD Graphics, HD Display, Natural Silver, 832T7PA)</h2><p><br></p>','White',30000,27891,'8584',1000,'continue','35201557-9ad7-41f2-a9dc-fb10a7bdca91.webp,d1cb03d6-368d-41e7-ab98-b4dc6ac0fc1c.webp,ae3e743e-f0f5-4bf2-9378-6b6a9432ac1d.webp,8268f4a7-8394-46fb-9bad-683fe25847f5.webp,1a42f5a4-635b-4efe-8df8-d999d532745b.webp,c8515c6b-2416-4fd2-a2a1-590b93760d3f.webp',4),(37,33,10,7,'MTUW3HN/A','<p>Processor Name   </p><p>A17 Pro Bionic   </p><p>Internal Storage</p><p>128GB</p><p><span style=\"background-color: rgb(25, 25, 25); color: rgb(255, 255, 255);\">Super Retina XDR Display</span></p>','White Titanium',139900,134900,'8584',1000,'continue','a0e70226-81ef-414f-8939-96c376094997.webp,acb1c6c4-6ec3-4521-8519-5ca61d5980d7.webp,1057ff90-a60e-4831-b2c5-644ca74dd44a.webp,25a5ba18-b66a-4a80-a98b-e388258d95ce.webp,258d7d8b-db41-4712-9c92-37ce863a36f4.webp,2083d940-5ea2-4570-9323-96f21629a60f.webp,a8eb8443-ad77-4cbd-a40c-0158320512c5.webp',4),(37,33,11,8,'MU793HN/A','<p>Mobile Type</p><p>iOS Smartphone</p><p>  Processer:</p><ul><li>Processor Name</li><li>A17 Pro Chip | A17 Pro Bionic</li><li>GPU (Graphics)</li><li>6-core GPU</li></ul><p><br></p>','Natural Titanium',151900,159900,'8584',1000,'continue','8afafd62-8afd-412c-b835-d32547e6cd17.webp,1956f9f4-c9d4-4cbe-89db-826171df79ed.webp,452f0dde-c265-4996-83ed-481021dd10cd.webp,043108a8-ecd6-4da0-b22c-9a8b6da13270.webp,be1e6eba-0aa2-4f40-bdb6-81964b0a0ae5.webp,c7395fea-3603-4ce2-9299-497bbf6eb2b4.webp,be83029b-6e34-46d2-ab47-42c026bb6c75.webp',4),(38,34,12,9,'UN.431SI.233','<h2>(14 inch, 8GB, 512GB, Windows 11, MS Office, AMD Radeon Graphics, LED-Backlit Display, Rose Gold, UN.431SI.233)</h2><h3>&nbsp;PROCESSOR</h3><p>AMD Ryzen 3.</p><p>Type of RAM</p><p>LPDDR4</p><p>RAM</p><p>8 GB</p><p><br></p><h3><br></h3>','Rose Gold',23904,22904,'8584',75,'continue','a35f37fb-2839-4991-ba74-226eb94725b7.webp,c516866e-fe78-40f1-a588-cc29b87d8400.webp,6f87e43b-c7e0-432e-8b79-f46a8a2b6007.webp,330fd1d1-d0fb-4156-8087-9a5bdeab9399.webp,7804a069-cccb-4584-966b-010b212655f6.webp,49bffd21-c00d-478b-a34c-80c6d2be9dc7.webp',3),(45,22,13,10,'JBLBAR913DBLKIN','<h2>(Dolby Atoms, 9.1 Channel, Black)</h2><h3>Subwoofer Output</h3><h3>300 Watts</h3><h3>Additional Audio Features</h3><h3>3D Surround Sound, Compatible with Airplay 2, 4 Upward Firing Speakers provide ultimate 3D Sound Experience</h3><p><br></p>','black',78000,77999,'8584',50,'continue','c8abd242-e47c-4bb7-8907-960750d69c4c.webp,ee2b56f2-0b74-49f2-8821-477077d0add7.webp,9ac15ed9-495c-46f3-848b-560a805a264a.webp,fe5f7a66-aaa9-4073-8949-1c28f42eab91.webp,e983b9ba-8549-463e-b914-66251851045b.webp,79124d49-2931-43f5-b144-f3186ac1e09f.webp,790af82c-f75c-4ccf-a09a-1d7597c1c557.webp',3),(56,23,14,11,'CRLWMD701STL65','<h2>(CRLWMD701STL65, Fuzzy Control, Grey)</h2><h4><br></h4><h4>Dryer Capacity:</h4><h4>6.5 Kg</h4><h4>Washer Capacity:</h4><h4>6.5 Kg</h4><h4>Drying Technique:</h4><h4>Air Dry Function</h4><h4>Water Consumption In Litres:</h4><h4>54 Litres</h4><h4>Washer &amp; Dryer Drum Volume:</h4><h4>54 Litres</h4><h4>Washing Technology:</h4><h4>Pulsator</h4><p><br></p>','Grey',11990,11990,'85885',50,'continue','8b6adc42-9c6f-4b9d-aded-b0a65af2fd13.webp,1f51ac0e-44bd-42e9-89db-c9d45fcc6e77.webp,e9874139-f4db-462a-b183-708fdeab25c6.webp,286d0d4f-5b20-404c-b36d-5b61387ea1a9.webp,1eb7506d-2e5c-4069-84a1-734bd9e1c363.webp,f6aa4518-6a25-4225-aa2b-c5d3c8e34c3a.webp',2),(39,26,15,12,'UA43AUE60AKLXL','<h3>Brand: <a href=\"https://www.croma.com/samsung-store/b/b-0328\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--text-color);\"><strong>SAMSUNG</strong></a></h3><h3>Model Series: Crystal 4K</h3><h3>Resolution:</h3><h3>3840 x 2160 pixels</h3><h3>HDR Type:</h3><h3>HDR 10+</h3><h3>Screen Size in Inches:</h3><h3>43 Inches</h3><p><br></p>','Black',28541,27541,'85285',75,'continue','f871e088-36f6-497d-aa58-13c6112dc211.webp,6cdde161-3ff4-4ba3-9668-951653268c81.webp,7cd80932-3c22-4155-bb70-601a493b223d.webp,4341f16b-0c41-433f-8a67-297a46ec23a0.webp,d2f18c41-0aba-434b-9338-46d42be926b5.webp,fbc091f1-45bf-4a93-99ba-f72a4d133d76.webp,26e2bfad-3db7-4940-af8e-a61a9a1f14bc.webp',4),(38,21,16,13,'MR7J3HN/A','<h2>Key Features:</h2><h3>Processor : Apple M3 Chip</h3><h3>Display : 35.97 cms (14.2 inches) Liquid Retina</h3><h3>Memory : 8GB Unified Memory RAM, 512GB SSD ROM</h3><h3>OS : macOS</h3><h3>Graphics : Apple</h3><h3>Warranty : 1 Year</h3><p><br></p>',' Silver',1610000,169900,'8584',100,'continue','e00af423-e414-4254-85c8-3e9761ca7fe8.webp,f696208f-7a09-4fc6-9620-82e6d5403935.webp,af9ace3a-645c-4b19-9462-1a66867bc185.webp,a9238f7c-580d-4be3-8691-f9f773fbacea.webp,6ff576a5-0752-4597-ac03-170b72d882c2.webp',4),(38,21,17,14,'MNEP3HN/A','<h3>Key Features:</h3><h3>Processor: Apple M2</h3><h3>Display: 33.78 cms (13.3 inches) LED-Backlit</h3><h3>Memory: 8GB Unified Memory RAM, 256GB SSD ROM</h3><h3>OS: macOS Monterey</h3><h3>Warranty: 1 Year Onsite</h3><ul><li><br></li></ul><p><br></p>','Silver',111000,119990,'8584',75,'continue','a395c00a-e936-4dc6-b1e0-53f9b4146712.webp,c27e5f64-4b11-4144-ba94-a8484721fd54.webp,a5fbcec0-65c3-4088-8137-cd09ec08f9db.webp,265d8587-c98d-49dc-bbc5-c2741cb73fde.webp,b2879f3e-e77c-49b4-918f-fc614105710d.webp,e42bee1c-acdf-4c63-9740-62aff25abe3a.webp,4e7c0e94-b957-41c6-a325-8e6be9321f1c.webp',4),(37,28,18,15,'RMX3741','<h3>Key Features</h3><h3>Display: 6.7 inches (17.02 cm), AMOLED, 120 Hz Refresh Rate</h3><h3>Memory: 12GB RAM, 256GB ROM</h3><h3>Processor: MediaTek Dimensity 7050 5G Chipset, Octa Core, 2.6 GHz</h3><h3>Camera: 200 MP + 8 MP + 2 MP Triple Rear &amp; 32 MP Front Camera</h3><h3>Battery: 5000 mAh with 100W Fast Charging</h3><h3>USP: AI Scene Recognition, Instant Bandwidth Technology</h3><p><br></p>','Sunrise Beige',30000,29999,'8584',80,'continue','c3f6d166-08c2-4de3-b7f9-8b298701cb13.webp,c9b0b2f3-a563-403a-94dc-7baa66eef5d3.webp,d1c596c9-7e75-4e22-9e49-9b5a24a76b34.webp,a1627be6-41dd-493f-bcb0-4172780c5aa5.webp,3e0d481a-70dd-4930-9914-1a58958762d0.webp,e95c68c7-995d-4558-949c-9db92153e779.webp',3),(37,33,19,16,'MU7C3HN/A','<h2>Key Features</h2><p><br></p><ul><li>Display: 6.7 inches (17 cm), Super Retina XDR Display, 120 Hz Refresh Rate</li><li>Memory: 512GB ROM</li><li>Processor: Apple A17 Pro Chip, Hexa Core</li><li>Camera: 48 MP + 12 MP + 12 MP Triple Rear &amp; 12 MP Front Camera</li><li>Battery: 15W MagSafe Wireless Charging</li><li>USP: ProMotion Technology | Cinematic Video Stabilisation</li></ul><p><br></p>','Black',180000,179900,'8584',95,'continue','05ad3744-4592-452f-b552-b566ea27fd79.webp,c61cc113-a52e-4c9f-8819-d5972a72a3e4.webp,cc5f44df-cec1-4777-8c21-22fe08166fa6.webp,007bd96c-f274-48a1-8f40-3d477702b3a6.webp,81b005fa-c497-4c11-92f7-d0a04a3df4f0.webp,62a8864f-8f64-42cc-a336-205a612a0317.webp,349e8c56-1833-4a4e-86bf-752459259bab.webp',4),(37,28,18,17,'RMX3741','<h2>Key Features</h2><p><br></p><ul><li>Display: 6.7 inches (17.02 cm), AMOLED, 120 Hz Refresh Rate</li><li>Memory: 12GB RAM, 256GB ROM</li><li>Processor: MediaTek Dimensity 7050 5G Chipset, Octa Core, 2.6 GHz</li><li>Camera: 200 MP + 8 MP + 2 MP Triple Rear &amp; 32 MP Front Camera</li><li>Battery: 5000 mAh with 100W Fast Charging</li><li>USP: AI Scene Recognition, Instant Bandwidth Technology</li></ul><p><br></p>','Oasis Green',30000,29999,'8584',85,'continue','d091d75b-2358-445b-9d5d-1c443fb82321.webp,1d39d77d-d091-4e69-b79a-7be2c45dc6c0.webp,48c610cd-b646-48b0-9531-cdfafd147b65.webp,95de3641-0ac5-4f28-b855-3f1299b79a1b.webp,4fd767f3-f590-4c0c-87bc-dde0b5e75965.webp,01764f54-241e-4b9c-b0d1-a1c6b54de8be.webp',4),(38,21,16,18,'MRX33HN/A','<h2>Key Features</h2><p><br></p><ul><li>Processor : Apple M3 Pro Chip</li><li>Display : 35.97cms (14.2 inches) Liquid Retina</li><li>Memory : 18 GB Unified Memory RAM, 512GB SSD ROM</li><li>OS : macOS</li><li>Graphics : Apple</li><li>Warranty : 1 Year</li></ul><p><br></p>','Space Black',120000,119999,'8584',85,'continue','4cbe8825-d742-49a8-8bda-d98b5820121a.webp,d0c4c791-15d6-4ab9-b22c-3fbebf954403.webp,59572407-b5bf-47b4-a757-57136cb938f9.webp,f4464014-bf37-4f26-bc9f-b9a9c5216951.webp,338a4bd7-29af-4efc-9d23-8b2fd3f84316.webp,92d0fd0d-fccd-421b-a207-51aca90b6f61.webp',4),(36,30,20,19,'IB-1690 TWS Earbuds with Passive Noise Cancellation (Water Resistant, Upto 5 Hours Playback, Black)','<h2>Key Features</h2><p><br></p><ul><li>Orientation Type: In-Ear</li><li>Connectivity: Bluetooth, Version 5.1</li><li>Battery Life: Up to 5 Hours Playback</li><li>Fast Charging: No</li><li>Noise Cancellation: Passive Noise Cancellation</li><li>Voice Assistant: Yes</li><li>Water Resistant, Deep Bass</li><li>6 Months Warranty</li></ul><p><br></p>','Black',750,679,'8584',100,'continue','5f482a38-801a-41f7-b3de-1ea3fa62ff87.webp,fd3f9915-2667-4cd6-a1a5-79ce4d0fcd57.webp,db348080-55a3-4c12-ace5-31291b3a400e.webp,6aaf4544-9f70-4c07-8501-40abd46f7300.webp,b26e7134-557c-4f02-974c-cbccf22b8d6a.webp',3),(45,22,21,21,'JBLCLUB700BTBLK On-Ear Wireless Headphone with Mic (Bluetooth 5.0, Dynamic Driver, Black)','<h2>Key Features</h2><p><br></p><ul><li>On-Ear</li><li>Ideal For: Entertainment | Travel | Professional</li><li>Dual-Mic Technology</li><li>Bluetooth 5.0</li></ul><p><br></p>','Black',7000,6200,'8584',85,'continue','8b41b7c7-0b3b-45ea-8d0a-e0770f5c0338.webp,3349e285-ba4d-4f6b-b9c5-8c086f32f2b9.webp,5649a1cd-018d-4480-bde6-62bb6f766d71.webp,b3f8f620-31f9-42be-8a61-0f1222c7a86f.webp,ce56655d-c9b7-4e9d-823a-2bfbc453f4fe.webp,8c57c6a3-bb2d-441b-a247-3fc8ec57d73d.webp',4),(40,35,22,22,'with Environmental Noise Cancellation (IPX4 Water Resistant, ASAP Charge, Opal Black)','<h2>Key Features</h2><p><br></p><ul><li>Orientation Type: In Ear</li><li>Connectivity: Bluetooth, Version 5.3</li><li>Battery Life: 50 Hours</li><li>Fast Charging: Yes</li><li>Noise Cancellation: Environmental Noise Cancellation</li><li>Voice Assistant: Active Voice Assistant</li><li>USP: IPX4 Sweat &amp; Water Resistant, BEAST Mode</li><li>Warranty: 12 Months Warranty</li></ul><p><br></p>','Black',1200,999,'8584',100,'continue','5b0118da-9983-43b8-9230-d2d0e1587015.webp,f2b9a6b3-6f5c-4f82-b48f-49110da20d26.webp,e66ef86d-c072-41fc-a5c8-623f15a7d416.webp,acbb7cc0-4ba8-4e6e-9132-828e167296c9.webp,d5e69f28-d526-4521-ac91-9ed73a3dc7f1.webp,52f15fac-50bc-498f-a098-92bdf4d7a156.webp',4);
/*!40000 ALTER TABLE `productdetails` ENABLE KEYS */;
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
