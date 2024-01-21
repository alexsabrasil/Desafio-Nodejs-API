## Programação Web Full Stack 2023.2 - Campinho Digital

- Exploração Frontend: outubro de 2023

- Domínio Backend: janeiro de 2024

# Desafio Node API

Este é um projeto desenvolvido como parte de um desafio. A aplicação consiste em uma API Node.js com funcionalidades básicas de autenticação de usuários.

## Interface gráfica

![form_login](https://github.com/alexsabrasil/Desafio-Nodejs-API/assets/113733583/ae8fda67-3972-4de3-be51-a5c55d4cd520)

## Funcionalidades

- Registro de usuários
- Autenticação de usuários
- ...

## Requisitos

- Node.js
- MongoDB

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/alexsabrasil/Desafio-Nodejs-API.git
   cd Desafio-Nodejs-API

## A aplicação estará rodando em http://localhost:3000

## Endpoints

/auth/register: Registrar um novo usuário
/auth/login: Autenticar um usuário

## Funcionamento

A autenticação utiliza os métodos POST e GET. Ações realizadas:

- Verificação se o usuário existe no MongoDB.
- Comparação da senha fornecida com a senha armazenada usando Bcrypt.
- Geração de um token JWT se a autenticação for bem-sucedida.

## Saída

- Status HTTP 200 (OK) com o token JWT se a autenticação for bem-sucedida.
- Status HTTP 401 (Unauthorized) se as credenciais forem inválidas.
- Mensagem indicando sucesso ou falha.

## Recursos

- Utilizei o modelo de usuário fornecido no exemplo.
- Usei o Bcrypt para o hash seguro de senhas.
- Implementei estratégias de autenticação do Passport.js para o login.


## Observações

- Documentei este código adequadamente.
- Implementei medidas de segurança, como tratamento de erros e validação de entrada.
- Testei os endpoints usando ferramenta como Postman, achei interessante e de fácil compreensão.

## Contribuindo

- Sinta-se à vontade para contribuir com melhorias ou correções. Abra uma issue ou envie um pull request.

Autora
Alexsandra Tavares

Licença
Este projeto está licenciado sob a Licença ISC.