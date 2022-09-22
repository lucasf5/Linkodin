[![API LinkOdin - Node.js CI](https://github.com/lucasf5/Linkodin/actions/workflows/node.js.yml/badge.svg)](https://github.com/lucasf5/Linkodin/actions/workflows/node.js.yml)

# API Linkodin - Registration of Vacancies and Candidates
API developed as an integrator project in the Digital House Course - IFood.

<hr>

## Technologies used
<div style="display: inline_block"><br/>
  <img align="center" alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img align="center" alt="node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img align="center" alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img align="center" alt="express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img align="center" alt="sequelize" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
  <img align="center" alt="mysql" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
  <img align="center" alt="swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black">
</div>

<!-- ![screenshot 1](https://raw.githubusercontent.com/herudi/crud_express_sequelize/master/screenshot_1.png) -->

<hr>

### 1) Clone project
`git clone https://github.com/lucasf5/Linkodin.git`

### 2) Go to root project
`cd linkodin`

### 3) Install sequelize-cli --globall 
`npm install sequelize-cli -g` <br>
doc: https://www.npmjs.com/package/sequelize-cli

### 4) Install Package local
`npm install`

### 5) Config database
change username and password and database_name (if you want). on path /config/config.json <br>
doc: https://sequelize.org/docs/v6/other-topics/migrations/

### 6) Config sequelize 
Create and edit the .sequelizerc file in the project root <br>
doc: https://sequelize.org/docs/v6/other-topics/migrations/

### 7) Creating Database
`sequelize db:create`

### 8) Migrations
`sequelize db:migrate`

### 9) Seeders (if you need dummy data)
`sequelize db:seed:all`

### 10) Running project (Development)
`npm run dev`

<hr>

You can access via: http://localhost:3000/

Documentation: http://localhost:3000/api-docs


Good Look :)


