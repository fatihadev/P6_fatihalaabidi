const express = require('express');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

const app = express();

// connexion a mango 
mongoose.connect('mongodb+srv://sitepiment:saucepiment@cluster0.ajtncbv.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  delete req.body._id;
   // on retire le champs
  const sauce = new sauce({
    ...req.body
     // raccourci pour detaille titre body etc
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
    // save enregistre lobjet dans la base 
});

// d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
// d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
// d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).

app.use('/api/sauce', (req, res, next) => {
  const sauce = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(sauce);
  app.use('/api/sauce', sauceRoutes);
  app.use('/api/sauce', sauceRoutes);
app.use('/api/auth', userRoutes);
});

module.exports = app;