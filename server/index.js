const mongoose = require('mongoose');
const express = require('express');

const cors = require('./src/middlewares/cors');
const auth = require('./src/middlewares/auth');
const bookController = require('./src/controllers/bookController');
const userController = require('./src/controllers/userController');

async function start () {
    try {
        const db = await mongoose.connect('mongodb://0.0.0.0:27017/library');

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');

        return process.exit(1);
    }
    
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(auth());

    app.use('/book', bookController);
    app.use('/users', userController);

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}

start();