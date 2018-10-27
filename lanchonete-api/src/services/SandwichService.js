const ingrediente = require('../models/Ingrediente');
const sandwich = require('../models/Sandwich');

module.exports = {
    async index(req, res) {
        const data = await {
            sandwich: sandwich,
            ingrediente: ingrediente
        }
        return res.json(data);
    }
}