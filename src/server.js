const express = require('express');
const app = express();

// Configuração do middleware CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Resto da configuração do servidor Express...

const PORT = 3000;
app.listen(PORT, '192.168.160.234', () => {
  console.log(`Servidor Express iniciado em http://192.168.160.234:${PORT}`);
});