const mongoose = require('mongoose'); 
// on importe mongoose

const uniqueValidator = require('mongoose-unique-validator');
// rajouter ce validateur comme plugin a notre schema 

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
// on cree un schema email de type string et requi pareil pour le mdp et nous avons utilisé unique 
// pour que ce soit impossible de s'inscrire plusieurs fois avec la meme adressec

userSchema.plugin(uniqueValidator);
// on l'applique a ce schema avant d'en faire un model 

module.exports = mongoose.model('User', userSchema);
// on exporte ce schema sous forme de model