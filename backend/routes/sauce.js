const express = require("express");
const router = express.Router();
// IMPORTATION MIDDLEWARES
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// IMPORTATION CONTROLLERS
const saucesCtrl = require ('../controllers/sauce');


// Définition des chemins sauces , multer et auth qui sert au router

// ROUTES
router.get('/',auth,saucesCtrl.allSauces);
router.get('/:id',auth,saucesCtrl.oneSauce);
router.post('/',auth,multer,saucesCtrl.createSauce);
router.post('/:id/like',auth, saucesCtrl.likeSauce);
router.put('/:id',auth,multer,saucesCtrl.modifySauce);
router.delete('/:id',auth,saucesCtrl.deleteSauce);
// chaque route avec son crud + chemin 

module.exports = router;


