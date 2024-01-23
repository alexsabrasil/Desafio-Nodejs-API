// app.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const passportConfig = require('./middleware/passportConfig'); // Adicionei esta linha
const keys = require('./config/keys');

const app = express();

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do CROS
app.use(cors());

// Conexão com o MongoDB
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso.'); // Adicionado log de sucesso
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err); // Adicionado log de erro
  });

// Configuração do Passport
app.use(passport.initialize());
passportConfig(passport);

// Rotas
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Porta do servidor
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
