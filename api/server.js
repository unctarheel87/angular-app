const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || '8080';
const router = require('./controller/beerlist');

//express setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static files
app.use(express.static('public'))
//routes
app.use(router)

// mongoDb
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/beerlist";

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log("server is running at " + PORT)
});