// routes/userRoutes.js
const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

// Rota protegida por autenticação JWT
router.get(
  '/user-data',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    userController.getUserData(req, res);
  }
);

module.exports = router;





