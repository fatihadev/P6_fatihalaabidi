const express = require('express');

const router = express.Router();
//  au lieu de faire app.get ou pots on fait router.GET OU POST

const auth = require('../middlewear/auth');
const sauceCtrl = require('../controllers/sauce');
const multer = require('../middlewear/multer-config');
// Définition des chemins sauces , multer et auth qui sert au router


// routes 
router.get('/',auth,sauceCtrl.allSauces)
router.get('/:id',auth,sauceCtrl.oneSauce)
router.post('/',auth,multer,sauceCtrl.createSauce)
router.post('/:id/like',auth,multer,sauceCtrl.createSauce)
router.put('/:id',auth,sauceCtrl.modifySauce)
router.delete('/:id',auth,sauceCtrl.deleteSauce)
// Chaque router a son CRUD (Get, Post, Put, Delete) avec le chemin

module.exports = router;
