const express = require ( 'express' );
const massive = require ( 'massive' );
const cloudinary = require ('cloudinary');
const axios = require ( 'axios' );
const session = require ( 'express-session' );
require( 'dotenv' ).config();
const bodyParser = require ( 'body-parser' );
const PORT = 3579;
const auth0 = require('./authController/auth0');
const products = require('./authController/products');
const createReactClass = require('create-react-class');

const app = express();

//Zeit
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    },
    secret: process.env.SESSION_SECRET
}))
massive( process.env.CONNECTION_STRING ).then( db => {
    app.set( 'db', db )
})

// cloudinary set up
app.get('/api/upload', (req, res) => {
    const timestamp = Math.round((new Date()).getTime() / 1000);
    const api_secret = process.env.CLOUDINARY_SECRET_API;
    const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret)
    const payload = {
        signature: signature,
        timestamp: timestamp
    }
    res.json(payload)
})


//auth0
app.get('/callback', auth0.login)
app.get('/api/user', auth0.getUser)
app.post('/api/logout', auth0.logout)
app.post('/api/createorder', products.create)

//Zeit
const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen( PORT, () => console.log( `I got ${PORT} problems and this personal project is one of them`))