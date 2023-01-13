const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

// ous créons un schéma de données qui contient les champs souhaités pour chaque sauce,
//  indique leur type ainsi que leur caractère (obligatoire ou non). Pour cela,
//   on utilise la méthode Schema mise à disposition par Mongoose. 
// Pas besoin de mettre un champ pour l'Id puisqu'il est automatiquement généré par Mongoose 

module.exports = mongoose.model('Sauce', sauceSchema); 
// ensuite, nous exportons ce schéma en tant que modèle Mongoose appelé « sauce », 
// le rendant par là même disponible pour notre application Express