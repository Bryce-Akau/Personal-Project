-- connecting products to users_order_form through the users_order_form id with the products order.id
SELECT * FROM products
JOIN users_order_form
ON (users_order_form.id = products.order_id);