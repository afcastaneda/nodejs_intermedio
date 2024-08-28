require('dotenv').config();

const { Sequelize,DataTypes } = require('sequelize');
const player_model = require('../model/player');
const level_model = require('../model/level');
const player_level_model = require('../model/player_level');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);
const Player = player_model(sequelize, DataTypes);
const Level = level_model(sequelize, DataTypes);
const Player_Lever = player_level_model(sequelize, DataTypes);

sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

sequelize.sync({ alter: true, force: false })
  .then(() => console.log('Sincronización completada.'))
  .catch(err => console.error('Error en la sincronización:', err));

module.exports = {
    Jugador,
    Nivel,
    JugadorNivel,
    sequelize
};