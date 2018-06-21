-- creating the customize order for the user
INSERT INTO products
    (order_id, length, track, track_color, aussie_line, aussie_color, size, ar_handle_color)
VALUES
    (${order_id}, ${length}, ${track}, ${track_color}, ${aussie_line}, ${aussie_color}, ${size}, ${ar_handle_color})

returning *;