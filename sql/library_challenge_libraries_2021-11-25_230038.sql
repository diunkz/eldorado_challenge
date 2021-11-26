-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: library_challenge
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `libraries`
--

DROP TABLE IF EXISTS `libraries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libraries` (
  `isbn` int NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `number_pages` int NOT NULL,
  `copies_available` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libraries`
--

/*!40000 ALTER TABLE `libraries` DISABLE KEYS */;
INSERT INTO `libraries` VALUES (34,'In Search of Lost Time','Marcel Proust',100,5,'2021-11-26 02:36:34','2021-11-26 02:36:34'),(35,'Ulysses','James Joyce',60,100,'2021-11-26 02:36:57','2021-11-26 02:36:57'),(36,'Don Quixote','Miguel de Cervantes',60,40,'2021-11-26 02:37:19','2021-11-26 02:37:19'),(37,'One Hundred Years of Solitude ','Gabriel Garcia Marquez',60,40,'2021-11-26 02:38:01','2021-11-26 02:38:01'),(38,'The Great Gatsby','F. Scott Fitzgerald',14,50,'2021-11-26 02:39:41','2021-11-26 02:39:41'),(39,'Moby Dick','Herman Melville',60,100,'2021-11-26 02:39:57','2021-11-26 02:39:57'),(40,'War and Peace','Leo Tolstoy',50,80,'2021-11-26 02:40:17','2021-11-26 02:40:17'),(41,'Hamlet','William Shakespeare ',30,70,'2021-11-26 02:41:00','2021-11-26 02:41:00'),(42,'The Odyssey','Homer',10,45,'2021-11-26 02:41:13','2021-11-26 02:41:13'),(43,'Madame Bovary','Gustave Flaubert',30,60,'2021-11-26 02:41:31','2021-11-26 02:41:31'),(44,'The Divine Comedy','Dante Alighieri',30,60,'2021-11-26 02:41:49','2021-11-26 02:41:49'),(45,'Lolita','Vladimir Nabokov',20,50,'2021-11-26 02:42:05','2021-11-26 02:42:05'),(46,'The Brothers Karamazov','Fyodor Dostoyevsky ',20,60,'2021-11-26 02:42:19','2021-11-26 02:42:19'),(47,'Crime and Punishment','Fyodor Dostoyevsky',45,87,'2021-11-26 02:42:52','2021-11-26 02:42:52'),(48,'Wuthering Heights','Emily Brontë',34,67,'2021-11-26 02:43:19','2021-11-26 02:43:19');
/*!40000 ALTER TABLE `libraries` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25 23:00:44
