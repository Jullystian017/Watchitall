const express = require('express');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
app.use(express.json());
app.use('/api/movies', movieRoutes); // Prefix semua route movie

module.exports = app;
