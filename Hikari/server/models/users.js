const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  userName: { type: String, required: true},
  passWord: { type: String, required: true},
  email: { type: String, required: true}
});

module.exports = mongoose.model('Users', usersSchema);
