const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('films', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { sequelize }