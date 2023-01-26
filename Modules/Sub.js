const path = require('path')
const { sequelize } = require('../DB')
const { DataTypes } = require('sequelize')

const Sub = sequelize.define('Sub', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sale: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  img: {
      type: DataTypes.STRING,
      allowNull: false
  },
  img_sale: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  // Other model options go here
  tableName:'subs',
}); 

  module.exports = { Sub }