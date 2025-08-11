require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //permite que o express entenda JSON
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });