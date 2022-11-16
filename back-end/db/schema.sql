DROP DATABASE IF EXISTS worth_a_shot_user;
CREATE DATABASE worth_a_shot_user; 

\c worth_a_shot_user; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL
    age INT NOT NULL,
    zip_code INT,
    gender TEXT
);