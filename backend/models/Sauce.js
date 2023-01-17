const mongoose = require('mongoose');

//Fabrique un schema pour les sauces dans la base de données.
const thingSchema = mongoose.Schema({
  userId:        {type: String, required: true }, 
  name:          {type: String, required: true }, 
  manufacturer:  {type: String, required: true }, 
  description:   {type: String, required: true }, 
  mainPepper:    {type: String, required: true }, 
  imageUrl:      {type: String, required: true }, 
  heat:          {type: Number, required: true }, 

  //Système de like et dislike
  likes:         {type: Number, required: true, default : 0 }, 
  dislikes:      {type: Number, required: true, default : 0 }, 
  usersLiked:    {type: Array, required:true  }, 
  usersDisliked: {type: Array, required:true },
});

module.exports = mongoose.model('Sauce', thingSchema)