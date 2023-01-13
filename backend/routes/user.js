const express = require('express');
const router = express.Router();

// Importation du modules router express

const userCtrl = require('../controllers/user');
// Creation du chemin user

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
// Export du router