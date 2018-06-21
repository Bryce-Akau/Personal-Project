const express = require ( 'express' );
const massive = require ( 'massive' );
const axios = require ( 'axios' );
const session = require ( 'express-session' );
require( 'dotenv' ).config();
const bodyParser = require ( 'body-parser' );
const PORT = 3579;
const auth0 = require('./authController/auth0');

const app = express();
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

//auth0
app.get('/callback', auth0.login)
app.get('/api/user', auth0.getUser)
app.post('/api/logout', auth0.logout)

app.listen( PORT, () => console.log( `I got ${PORT} problems and this personal project is one of them`))