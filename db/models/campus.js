'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const User = require('./user')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    defaultValue: '/default.jpg'
  }
},{
    associate: (models) => {
      Campus.hasMany(models.User, { onDelete: 'cascade' });
    }
  })
 