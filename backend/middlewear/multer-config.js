const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };
//  les  mimetypes , les extensions 


  const storage = multer.diskStorage({
    // cree un objet de configation pour muler , disktorage pour save sur disk
    destination: (req, file, callback) => {
      callback(null, 'images');
    },
    // premier argument destination on appel le callback , null et le nom du dossier 

    filename: (req, file, callback) => {
      const name = file.originalname.split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + '.' + extension);
    }
    // deuxieme argument , le nvx nom pour le ficher on utilise le nom d'origine et on va split
    // autour des espace et on appel join (on elimine les espace )
    // le minetime est urilisé 
    // on appel le callback et on appel de filename donc le nom + le time + . + nom de fichier
  });
  
  module.exports = multer({storage: storage}).single('image');
//   on exporte middlewear , on appel la mthode single pour dire que c'est unique 
