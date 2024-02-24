const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/registrar', (req, res) => {
  // Lógica de manejo de la solicitud POST
  console.log('Recibida una solicitud POST en /registrar');
  res.json({ mensaje: 'Solicitud POST recibida correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
