DROP DATABASE IF EXISTS worth_a_shot;
CREATE DATABASE worth_a_shot; 

\c worth_a_shot; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL,
    gender TEXT,
    zip_code TEXT,
    personality TEXT,
    flavor TEXT,
    atmosphere TEXT NOT NULL
);

CREATE TABLE alcohols (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    proof INT,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    flavor TEXT NOT NULL
);

-- SELECT * FROM alcohols JOIN users ON users.flavor = alcohols.flavor