<p id="voltar">
<a href="#sobre">Sobre</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#documentação">Documentação</a> |
<a href="#features">Features</a> |
<a href="#back">Rodando o back-end</a> |
<a href="#desenvolvedor">Desenvolvedor</a>
</p>

<h1 id="sobre">📕 Projeto Bis2bis-Universities</h1>

Uma API REST para uma plataforma de registro de Universidades. Nessa API, podemos visualizar, cadastrar, editar e deletar universidades.A API foi desenvolvida utilizado as tecnologias **TYPESCRIPT, NODE.JS, NEST.JS EXPRESS.JS, MONGODB** como banco de dados **SWAGGER** para a documentação. Além disso, o projeto foi estruturado utilizando **PROGRAMAÇÃO ORIENTADA A OBJETOS(POO)** e princípios **S.O.L.I.D.**

<h2 id="tecnologias">🛠 Tecnologias</h2>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/docs/)
- [NestJS](https://docs.nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)

<h2 id="documentação">📃 Documentação no Swagger</h2>

- Para visualizar a documentação é necessário clonar o projeto na sua maquina e rodar o seguinte comando: ```npm run start:dev``` depois de confirmar que o projeto está rodando é só clicar no link abaixo ↙
- [Swagger](http://localhost:3000/api)

<h2 id="features">✔️ Features</h2>

🎓 Universidades

- [x] Visualizar todas as universidades cadastradas
- [x] Visualizar universidades por país e página
- [x] Visualizar uma universidade específica
- [x] Criar uma nova universidade
- [x] Editar uma universidade já criada
- [x] Deletar universidade

<h2 id="back"> 🎲 Rodando o Back End (servidor)</h2>

### Pré-Requisitos

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/)
- Uma instancia de um banco de dados [MongoDB](https://www.mongodb.com/)
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/efss7/bis2bis-universities.git
2. cd bis2bis-universities
```
* Para instalar e rodar o projeto
```
3. npm install
4. npm run start:dev
    ou
3. yarn install
4. yarn run start:dev
```
* Para popular/despopular o banco de dados com as universidades
```
5. npm run populate
6. npm run unpopulated
    ou
5. yarn run populate
6. yarn run unpopulated
```
Renomeie o arquivo ```.env.example```  para ```.env``` e preencha as variáveis com seus dados do banco de dados MongoDB. É muito importante para a execução do servidor.

<h2 id="desenvolvedor">👨‍💻 Desenvolvedor</h2>
<table>
<td><a href="https://github.com/efss7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99001809?v=4" width="100px;" alt="Imagem profile Eric Silva desenvolvedor"/><br /><sub><b>Eric Silva </b></sub></a><br />
</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
