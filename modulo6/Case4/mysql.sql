-- Active: 1656904372671@@35.226.146.116@3306@silveira-21814526-luis-martins
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tags NOT NULL
);

SELECT * FROM products;

#DROP TABLE products; 