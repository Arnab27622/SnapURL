require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectMongoDB } = require('./connection.js');
const { checkForAuthentication } = require('./middleware/auth.js');
const app = express();
const port = process.env.PORT || 5000;

if (!process.env.MONGO_URL) {
    console.error('MONGO_URL is not defined in .env file');
    process.exit(1);
}

connectMongoDB(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    });

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(checkForAuthentication);

app.use((req, res, next) => {
    res.locals.port = port;
    next();
});

const urlRouter = require('./routes/url.js');
const staticRouter = require('./routes/staticRoutes.js');
const userRouter = require('./routes/user.js');

app.use('/url', urlRouter);
app.use('/user', userRouter);
app.use('/', staticRouter);

app.listen(port, () => {
    console.log(`Server is running on Port ${port}...`);
});