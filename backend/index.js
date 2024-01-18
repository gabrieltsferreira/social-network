const express = require('express')
const app = express();

//JSON parser
app.use(express.json());


//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


//Routing
const testRoute = require('./routes/Test');
const userRoute = require('./routes/User');
const loginRoute = require('./routes/Login')

const authRoute = require('./routes/OAuth')
const authRequestRoute = require('./routes/OAuthRequest')

app.use('/test', testRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute)

app.use('/oauth', authRoute);
app.use('/oauthrequest', authRequestRoute);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));