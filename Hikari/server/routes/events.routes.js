const express = require('express');
const router = express.Router();

//Esta es la api rest, para enviar .json
router.get('/', (req, res) =>{
  res.send('Hello World');
});

module.exports = router;
