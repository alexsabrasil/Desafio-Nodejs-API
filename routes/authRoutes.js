// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../config/keys');

// Rota de registro
router.post('/register', authController.register);

// Rota de login local
router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      console.error('Erro durante o login (passport.authenticate):', err);
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }

    if (!user) {
      console.error('Usuário não encontrado:', info);
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ user }, keys.jwtSecret, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  })(req, res, next);
});

// Rota protegida
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json({ message: 'Rota protegida alcançada!' });
});

module.exports = router;
