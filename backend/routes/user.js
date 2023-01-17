const express = require('express');
const router = express.Router();
// IMPORTATION modules router express

const userCtrl = require('../controllers/user');
// creation du chemin user 

// ROUTE
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// export du router 
module.exports = router;

