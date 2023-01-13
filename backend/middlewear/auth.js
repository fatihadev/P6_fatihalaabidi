const jwt = require('jsonwebtoken');
// on importe jsonwebtoken
 
module.exports = (req, res, next) => {
    // fonction sera notre middlewear pour verifier si le token est valide

   try {
       const token = req.headers.authorization.split(' ')[1];
    //    on recupere le token
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //    on decode de yoten et on oyblie pas la cle secret 
       const userId = decodedToken.userId;
    //    on recupere le user id 
       req.auth = {
           userId: userId
       };
    //    et on rjoute cette valeur au request 

	next();
   } catch(error) {
       res.status(401).json({ error });
   }
//    en cas de probleme une erreur 401 seront envoyé 
};