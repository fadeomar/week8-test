BEGIN;

DROP TABLE IF EXISTS city cascade;

CREATE TABLE city (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country TEXT NOT NULL
);
CREATE TABLE user (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  user_password VARCHAR
);
INSERT INTO city (name, country) VALUES
  ('Gaza', 'Palestine'),
  ('London', 'UK'),
  ('New York', 'USA');

COMMIT;
