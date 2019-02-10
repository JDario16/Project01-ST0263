const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: { type: String, required: true},
  altitud: { type: "number", required: true},
  latitud: { type: "number", required: true}
});

module.exports = mongoose.model('Evento', EventSchema);
