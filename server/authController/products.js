const axios = require('axios');

module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const productData= req.body;
        console.log('product data', productData)
        const {firstName, lastName, middleIn, address, city, zipCode, phoneNumber, email, size, length, track, trackColor, aussieLine, reelColor, reelSize, handleColor} = req.body
        create_users_order_form([firstName, lastName, middleIn, address, country, city, zipCode, email, phoneNumber]).then(res => {
            const id = res.id;
            create_products([id, size, length, track, trackColor, aussieLine, reelColor, reelSize, handleColor]).then(res => {
                res.send(message = 'Mahalo for your order')
                console.log('message', message)
            })
        })
        // db.find_product({
        //     users_order_form.id = products.order_id
        // })
    }
}
