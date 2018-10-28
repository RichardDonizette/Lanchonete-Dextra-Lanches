const express = require('express');
const cors = require('cors');

//Inicializando o servidor
const app = express();
app.use(cors());

//Rotas
app.use('/api', require("./routes"))

app.listen(4201, () => {
    console.log('Listening on port 4201');
});