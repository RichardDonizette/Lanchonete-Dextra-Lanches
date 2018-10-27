const express = require('express');

//Inicializando o servidor
const app = express();

//Rotas
app.use('/api', require("./routes"))

app.listen(4201, () => {
    console.log('Listening on port 4201');
});