require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const {characterModel} = require('./models/Character')
const {favoritesModel} = require('./models/Favorites')
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/rickandmorty`,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/

characterModel(sequelize)
favoritesModel(sequelize)

module.exports = {
   ...sequelize.models,
   sequelize,
};
