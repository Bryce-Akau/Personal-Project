const axios = require('axios');

module.exports = {
    login: (req, res) => {
        const payload = {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/callback`
        }
    
        function tradeCodeForAccessToken(){
            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
        }

        function tradeAccessTokenForUserInfo(accessTokenResponse){
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessTokenResponse.data.access_token}`)
        }

        function storeUserInfoInDatabase(response){
            const userData = response.data
            const db = req.app.get('db')
            db.find_user({
                // console.log('dbdbdbdbdbd', db)
                auth0_id:userData.sub
            }).then(user => {
                console.log('---------------------->', user)
                if(user.length){
                    const userFromDb = user[0]
                    req.session.user = userFromDb
                    res.redirect('/#/')
                } else {
                    return db.create_user({
                        auth0_id: userData.sub,
                        name: userData.name,
                        picture: userData.picture
                    }).then(newUser => {
                        req.session.user = newUser
                        res.redirect(`/#/`)
                    }).catch(error => {
                        console.log('over here', error)
                        res.status(500).send('sometin happen: ' + error)
                    })
                }
            }).catch(error => {
                console.log('=====> find user', error )
                res.status(500).send('ahhhhh' + error)
            })
        }

        tradeCodeForAccessToken()
            .then(tradeAccessTokenForUserInfo)
            .then(storeUserInfoInDatabase)
            .catch(error => {
                console.log('server error', error)
                res.status(500).send('error happened: ' + error)
            })
    },

    logout: (req, res) => {
        req.session.destroy()
        res.end()
    },

    getUser: (req, res) => {
        res.json(req.session.user)
    }

}