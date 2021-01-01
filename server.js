const express = require('express')
const dotenv = require('dotenv');
const app=express()
const mongoose = require('mongoose')
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();


app.use(express.json())

const PORT =process.env.PORT || 5000;

app.all('/test',(req,res) => {
    res.send(req.query.role);
});

const Store = require('./routes/dataStore')
app.use('/dataStore',Store)


app.listen(3000,() => console.log('Server started'))