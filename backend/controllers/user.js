const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
// le package pour pouvoir cree et verifier toker


const User = require('../models/user');

// La méthode  hash()  de bcrypt crée un hash crypté des mots de passe de vos utilisateurs 
// pour les enregistrer de manière sécurisée dans la base de données.

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    // la fonction pour crypter un mdp, on la passe 10 tours pour que ce soit secrurisé
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
    //    creation d'un nvx utilisateur grace au model 
        user.save()
        // save pour enregistrer dans la base de données 
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  }; // dans le catch on capte l'erreur 

//   ethode assynchrone donc bloc then et catch
// signup pour enregistrer nvx utilisateur






exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    // on utilise findOne  de notre class user et on lui passe un objet qui sert de filtre 
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            // verifier si l'utilisteur a ete trouvé si elle est null il n'existe pas
            // laisser un message flou et non clair 
          
            bcrypt.compare(req.body.password, user.password)
            // on compare le mdp de la base de donnée avec celui qui nous ai donné 
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    } 
                    // erreur d'authentification
                    res.status(200).json({
                        token: jwt.sign(
                            { userId: user._id },
                            // donne que l'ont veut encoder pour etre sur aque la requete concerne ce user id
                            'RANDOM_TOKEN_SECRET',
                            // pour securise encodage, pour crypter le token 
                            { expiresIn: '24h' }
                            // expiration du token,
                        )
                         
                    });
                    // le mdp est correct 
                })
                .catch(error => res.status(500).json({ error }));
                // erreur de traitement 
        }) 
        .catch(error => res.status(500).json({ error }));
 };
// login pour connecter  utilisateur existat