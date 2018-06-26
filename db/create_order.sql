-- creating a user order form personal information
INSERT INTO users_order_form
    (user_id, email, address, city, state, country, first_name, last_name)
VALUES
    (${user_id}, ${email}, ${address}, ${city}, ${state}, ${country}, ${firstName}, ${last_name});
