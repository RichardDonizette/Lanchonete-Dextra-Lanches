const express = require('express');
const routes = express.Router();
const sandwichService = require('./services/SandwichService');

routes.get('/getData', sandwichService.index);

module.exports = routes;