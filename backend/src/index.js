import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import router from './router/web';
import connectDB from './config/connectDB';
import cors from 'cors';
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/', router);
viewEngine(app);

app.listen(PORT, () => {
    console.log(`Backend nodejs is running on the port: ${PORT}`);
});

