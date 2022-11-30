DROP DATABASE IF EXISTS worth_a_shot;
CREATE DATABASE worth_a_shot; 

\c worth_a_shot; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL,
    gender TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    personality TEXT,
    flavors TEXT,
    atmosphere TEXT NOT NULL,
    firebase_id TEXT NOT NULL,
    establishments TEXT
);

CREATE TABLE alcohols (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    proof INT,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    flavors TEXT NOT NULL
);

CREATE TABLE establishments (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    user_uid TEXT NOT NULL,
    yelp_id TEXT NOT NULL
)

-- SELECT * FROM alcohols JOIN users ON users.flavor = alcohols.flavor