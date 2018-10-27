const express = require('express');
const routes = express.Router();
const  ingrediente  = require('./models/Ingrediente');

routes.get('/igredientes', (req, res) => {
    return res.send(ingrediente);
});

module.exports = routes;