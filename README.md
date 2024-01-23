## Programação Web Full Stack 2023.2 - Campinho Digital

- Exploração Frontend: outubro de 2023

- Domínio Backend: janeiro de 2024

# Desafio Node API

Este é um projeto desenvolvido como parte de um desafio. A aplicação consiste em uma API Node.js com funcionalidades básicas de autenticação de usuários.

## Funcionalidades

- Registro de usuários
- Autenticação de usuários
- ...

## Requisitos

- Node.js
- MongoDB
- Nodemon

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

- Este código foi documentado de maneira abrangente, garantindo uma compreensão clara de sua lógica e funcionalidades.
- Implementei medidas robustas de segurança, incluindo tratamento de erros e validação rigorosa de entradas para assegurar um ambiente estável e confiável.
- Realizei testes exhaustivos nos endpoints, utilizando ferramentas como o Postman. A experiência foi notavelmente agradável e a compreensão das funcionalidades foi facilitada.
- Desenvolvi uma logomarca fictícia chamada 'GitBest' através da inteligência artificial, garantindo um design inovador e representativo para a marca.

## Resultados e interface gráfica

- Terminal VS CODE


- Testes no Postman

![post1](https://github.com/alexsabrasil/Desafio-Nodejs-API/assets/113733583/3755c72f-3b39-430d-aaa3-dc25952965ee)
![post2](https://github.com/alexsabrasil/Desafio-Nodejs-API/assets/113733583/af5dcb8a-6011-4665-8897-5e1293a5c666)
![post3-get](https://github.com/alexsabrasil/Desafio-Nodejs-API/assets/113733583/8a39533c-a576-4193-baad-65342f22946b)

- Interface gráfica

![Captura de tela 2024-01-22 232327](https://github.com/alexsabrasil/Desafio-Nodejs-API/assets/113733583/44397ce9-b4bc-46d5-968c-d0357f07eb6a)



## Contribuindo

- Sinta-se à vontade para contribuir com melhorias ou correções. Abra uma issue ou envie um pull request.
- Projeto elaborado com finalidades educativas, visando a aplicação prática dos conhecimentos adquiridos.

Autora: 
- Alexsandra Tavares

Licença: 
- Este projeto está licenciado sob a Licença ISC.
