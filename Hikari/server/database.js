const mongoose = require('mongoose');

//const LUR = 'mongodb://localhost/hikari-gps';
const LUR = 'mongodb://mongo-server/hikari-gps';

mongoose.connect(LUR)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
