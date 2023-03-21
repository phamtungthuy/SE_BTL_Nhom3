import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import router from './router/web';
import connectDB from './config/connectDB';
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
viewEngine(app);

app.listen(PORT, () => {
    console.log(`Backend nodejs is running on the port: ${PORT}`);
});

