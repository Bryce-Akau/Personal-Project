INSERT INTO users
    (auth0_id, name, picture)
VALUES
    (${auth0_id}, ${name}, ${picture})
returning *;