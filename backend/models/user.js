const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
// Importation de mongoose

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
// schema user  
// Définition du schéma pour mongoose

userSchema.plugin(uniqueValidator);
// Importation de mongoose-unique-validator

module.exports = mongoose.model('User', userSchema);
