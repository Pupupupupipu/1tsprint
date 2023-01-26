const path = require('path')
const { sequelize } = require('../DB')
const { DataTypes } = require('sequelize')

const Film = sequelize.define('Film', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  smallDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
  fullDescription: {
      type: DataTypes.STRING,
      allowNull: false
  },
  year: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  photo: {
      type: DataTypes.STRING,
      allowNull: false
  },
  video: {
      type: DataTypes.STRING,
      allowNull: false
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  // Other model options go here
  tableName:'films',
});

  module.exports = { Film }
  module.exports = { Film }