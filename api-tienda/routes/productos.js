
const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET
router.get('/', (req, res) => {
  res.json({ mensaje: 'Lista de productos (aquí irá la lógica)' });
});

module.exports = router;
