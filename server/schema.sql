
DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
   objectID INTEGER NOT NULL auto_increment,
   username VARCHAR(20) NOT NULL,
   roomname VARCHAR(20),
   text VARCHAR(100) NOT NULL,
  PRIMARY KEY (objectID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

