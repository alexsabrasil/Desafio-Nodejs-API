// authController.js
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const bcrypt = require('bcrypt');
const User = require('../models/User');


// Nova senha
const novaSenha = 'sua_nova_senha';

// Número de rounds de sal
const SALT_ROUNDS = 10;

// Gerar a senha criptgrafada
bcrypt.hash(novaSenha, SALT_ROUNDS, (err, hashedPassword) => {
  if (err) {
    console.error('Erro ao gerar a senha criptografada:', err);
  } else {
    console.log('Nova senha criptografada:', hashedPassword);
  }
});

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

// Middleware de autenticação local
exports.localLogin = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      console.error('Erro durante o login (passport.authenticate):', err); // Log de erro
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
};
