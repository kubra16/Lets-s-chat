const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const app = express();

const base_url = process.env.BASE_URL;
// console.log(base_url);

app.use(express.json());

mongoose.connect(base_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.listen(3000 , () => {
    console.log("App listening on port 3000");
});