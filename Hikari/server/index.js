const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares - Multiples rutas (Dar, recibir datos)
app.use(morgan('dev'));
app.use(express.json()); // Sirve para entender los archivos .json
app.use(cors({origin: 'http://10.131.137.162:80'}));


//Routes
app.use('/api/events', require('./routes/events.routes'));
//Starting the server

app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
});
