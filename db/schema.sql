### Schema

CREATE DATABASE drink_db;
USE drink_db;

CREATE TABLE drinks
(
	id int NOT NULL AUTO_INCREMENT,
	drink_name varchar(255) NOT NULL,
	drink_up BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
