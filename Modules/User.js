const path = require('path')
const { sequelize } = require('../DB')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sub: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    // Other model options go here
    tableName:'users',
  });

  module.exports = { User }