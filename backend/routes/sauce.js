const express = require('express');

const router = express.Router();
//  au lieu de faire app.get ou pots on fait router.GET OU POST

const auth = require('../middlewear/auth');
const sauceCtrl = require('../controllers/sauce');
const multer = require('../middlewear/multer-config');

// routes 
router.get('/',auth,sauceCtrl.allSauces)
router.get('/:id',auth,sauceCtrl.oneSauce)
router.post('/',auth,multer,sauceCtrl.createSauce)
router.post('/:id/like',auth,multer,sauceCtrl.createSauce)
router.put('/:id',auth,sauceCtrl.modifySauce)
router.delete('/:id',auth,sauceCtrl.deleteSauce)

module.exports = router;
