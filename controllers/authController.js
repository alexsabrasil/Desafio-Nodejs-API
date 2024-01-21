// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');

const SALT_ROUNDS = 10; // Número de rounds de sal, para evitar o número 10 em vários lugares.

exports.register = async (req, res) => {
  try {
    const { name, email, password, location } = req.body;

    // Verifica se o nome de usuário já está em uso
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já em uso.' });
    }

    // Hash da senha usando Bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação de um novo documento de usuário no MongoDB
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      location,
    });

    await newUser.save();

    res.status(201).json({ message: 'Registro bem-sucedido.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// userController.js
exports.getUserData = (req, res) => {
  // Implemente a lógica para obter os dados do usuário
  // Pode ser necessário verificar o token JWT aqui
  res.status(200).json({ user: req.user });
};
