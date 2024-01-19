const express = require('express');
const router = express.Router();
const {OAuth2Client} = require('google-auth-library');


async function getUserData(access_token){
    try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
        const data = await response.json(); 
        // return data
        console.log('data', data);
    } catch (error) {
        console.log('data', data);
    }

    
}

router.get('/', async function (req, res, next) {
    const code = req.query.code;
    try {
        const redirectUrl = process.env.GOOGLE_REDIRECT_URL;
        const oAuth2Client = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_SECRET_KEY,
            redirectUrl
        );
        const response = await oAuth2Client.getToken(code);
        await oAuth2Client.setCredentials(response.tokens);
        console.log('Tokens Acquired');
        const user = oAuth2Client.credentials;
        console.log('credentials', user);
        await getUserData(user.access_token);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router