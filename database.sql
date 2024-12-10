create table users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(225),
  email VARCHAR(225),
  password VARCHAR(225),
  phone VARCHAR(225),
  role VARCHAR(225)
);

create table report (
  id SERIAL PRIMARY KEY,
  name VARCHAR(225),
  email VARCHAR(225),
  message VARCHAR(225),
  codemach VARCHAR(225)
);

create table machine (
  id SERIAL PRIMARY KEY,
  name VARCHAR(225),
  code VARCHAR(225)
)