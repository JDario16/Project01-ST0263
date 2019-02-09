const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares - Multiples rutas (Dar, recibir datos)
app.use(morgan('dev'));
app.use(express.json()); // Sirve para entender los archivos .json


//Routes
app.use(require('./routes/events.routes'));
//Starting the server

app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
