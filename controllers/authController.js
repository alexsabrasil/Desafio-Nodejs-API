// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');

const SALT_ROUNDS = 10;

exports.register = async (req, res) => {
  let newUser;

  try {
    const { name, email, password, location } = req.body;

    // Verifica se o nome de usuário já está em uso
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error('E-mail já em uso:', email); // Log de erro
      return res.status(400).json({ message: 'E-mail já em uso.' });
    }

    // Hash da senha usando Bcrypt
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Criação de um novo documento de usuário no MongoDB
    newUser = new User({
      name,
      email,
      password: hashedPassword,
      location,
    });

    await newUser.save();

    const token = jwt.sign({ user: newUser }, keys.jwtSecret, {
      expiresIn: '1h', // Tempo de expiração do token (pode ser ajustado conforme a necessidade)
    });

    res.status(201).json({ message: 'Registro bem-sucedido.', token });
  } catch (error) {
    console.error('Erro durante o registro:', error); // Log de erro
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Middleware de autenticação
exports.login = async (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      console.error('Erro durante o login:', err || info); // Log de erro
      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }

    req.login(user, { session: false }, (error) => {
      if (error) {
        console.error('Erro durante o login:', error); // Log de erro
        res.status(500).json({ message: 'Erro interno do servidor.' });
      }

      const token = jwt.sign({ user }, keys.jwtSecret, {
        expiresIn: '1h',
      });
      res.status(200).json({ token });
    });
  })(req, res);
};
