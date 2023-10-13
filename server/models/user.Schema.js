const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');


const User = sequelize.define('User',
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }
)
module.exports = User