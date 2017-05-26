'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const Campus = require('./campus')


 const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  major: {
    type: Sequelize.STRING,
    allowNull: false
  },
  grade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gpa: {
    type: Sequelize.FLOAT,
    defaultValue: 3.0
  },
  email: {
    type: Sequelize.STRING,
    // isEmail: true,
    // allowNull: false
  }
 },{
   classMethods: {
     getGPA: function (campusID) {
      let studentGrades = 0; 
      let studentCount = 0;
      return this.findAll({where: {
        schoolId: campusID
      }})
      .then(students => students.forEach(student => {
        studentGrades += student.gpa;
        studentCount++;
      }))
      .then(() => roundGPA(studentGrades/studentCount))
      .catch()
     }
   }
 })

const roundGPA = (value) => {
  return Number(Math.round(value+'e'+2)+'e-'+2);
};

User.belongsTo(Campus, {as: 'school'});
module.exports = User;