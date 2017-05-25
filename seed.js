const Promise = require('bluebird');
const db = require('./db');
const Campus = require('./db/models/campus');
const User = require('./db/models/user');

const data = {
  user: [
    {name: 'Jenna', major: 'alien anthropology', grade: 'sophomore', gpa: 3.5, email:'jeonna@geomail.com'},
    {name: 'Melanie', major: 'astrology', grade: 'freshman', gpa: 2.9, email:'meolanie@geomail.com'},
    {name: 'Sarah', major: 'astrology', grade: 'junior', gpa: 4.0, email:'soroh@lizards.gov'},
    {name: 'Liz', major: 'alien anthropology', grade: 'senior', gpa: 3.1, email:'Elizabeth@blerg.edu'}
  ],
  campus: [
    {name: 'Venus'},
    {name: 'Pluto'}
  ]
};

db.sync({force: true})
.then(() => {
  console.log("seeding database i hope");
  const creatingCampuses = data.campus.map((campus) => {
    return Campus.create(campus);
  });
  const creatingUsers = data.user.map((user) => {
    return User.create(user);
  });

  return Promise.all([creatingCampuses, creatingUsers]);
})
.then(() => console.log('done creating things'))
.catch((err) => {
  console.error('There was totally a problem', err, err.stack);
});