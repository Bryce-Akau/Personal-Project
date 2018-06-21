-- selecting orders from the users_order_form and connecting the order_form with users through the order_form user_id and the users.id
SELECT users_order_form.*, users.name FROM users_order_form
JOIN users
ON (users_order_form.user_id = users.id);