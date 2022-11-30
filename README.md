# Sobre o projeto 📖

## Projeto desenvolvido para aplicação e fixação de estudos sobre o TDD ( Test Driven Development ). <br /> <br /> Que consiste em realizar os testes antes de realizar o código. Assim criando casos de uso do usuário e fixar o erro de acordo com o caso de uso. <br /> <br /> Para rodar os testes na aplicação utilize o comando `npm run test`

<br />

# Aplicação dos testes 🧪

<div>

## No projeto foi aplicado os **testes unitários** - *são testes que testam uma unidade única ou funcionalidade do sistema.*


```typescript

  //Service 
  function soma(num1: number, num2: number) {
    return num1 + num2
  }

  //Teste
  expect(soma(1, 2)).toBe(3)
```

</div>

<br />

<div>

## No projeto também foi aplicado os testes de **integração** - *Aonde é testado todo o ciclo da aplicação passando pelos controllers, serviços até o retorno da API. para o teste intregação foi utilizado a biblioteca supertest.*

```typescript

  //Controller
  import { routes } from '../routes';
  import { app } from '../app';

  routes.get("/hello", (req, res) => {
    return res.status(200).send({ 
      hello: 'world'
    });
  });

  //Teste
  import supertest from 'supertest';

  const response = await supertest(app).get("/hello")

  expect(response.status).toBe(200)
  expect(response.body).toEqual({
    hello: 'world'
  })
```

</div>


<br />

# Tecnologias usadas no projeto 🚀

## [Nodejs](https://nodejs.org/en/)

## [Typescript](https://www.typescriptlang.org/)

## [Prisma](https://www.prisma.io/)

## [Jest](https://jestjs.io/)

## [TsJest](https://www.npmjs.com/package/ts-jest)

## [SQlite](https://www.sqlite.org/index.html)

<br />

# Requisitos 🏋️‍♀️

## Ter o NodeJS Instalado na maquina junto com o gerenciador de pacotes npm ou yarn

<br />

# Comandos 🐱‍💻 

## Clonar projeto `git clone https://github.com/ruanvsrateira/tdd-pokemon-api`

## Entrar na pasta do projeto `cd tdd-pokemon-api`

## Gerar tabelas do banco de dados `npm run db:init`

## Rodar Testes `npm run test`

## Rodar Aplicação `npm run dev`

<br />

![GitHub top language](https://img.shields.io/github/languages/top/ruanvsrateira/tdd-pokemon-api?color=8047F8)
![GitHub last commit](https://img.shields.io/github/last-commit/ruanvsrateira/tdd-pokemon-api?color=%23EBC136)
![GitHub repo size](https://img.shields.io/github/repo-size/ruanvsrateira/tdd-pokemon-api?color=8047F8)
![GitHub made by](https://img.shields.io/badge/made%20by-ruanvsrateira-%23EBC136)

## Made by [Ruan Victor](https://linkedin.com/in/ruan-victor-rateira)