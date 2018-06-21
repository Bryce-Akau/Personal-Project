-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS users_order_form;
-- DROP TABLE IF EXISTS users;
-- users auth0 login
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    auth0_id TEXT UNIQUE,
    name TEXT,
    picture TEXT
);
-- users order form for personal information
CREATE TABLE IF NOT EXISTS users_order_form (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id), 
    email TEXT,
    address TEXT,
    city TEXT,
    state VARCHAR (2),
    country TEXT,
    first_name TEXT,
    last_name TEXT
);

-- users order form for customize products
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES users_order_form(id),
    length INTEGER,
    track TEXT,
    track_color TEXT,
    aussie_line TEXT,
    aussie_color TEXT,
    size TEXT,
    ar_handle_color TEXT
);