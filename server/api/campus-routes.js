'use strict'
const router = require('express').Router();
const db = require('../../db');

const Student = require('../../db/models/user');
const Campus = require('../../db/models/campus');
//const Promise = require('bluebird')

//find all campuses
router.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then((campuses) => res.send(campuses))
	.catch(next);
});

//get gpa average for one campus
router.get('/:schoolId/info', (req, res, next) => {
    let schoolId = req.params.schoolId
	Student.getGPA(schoolId)
	.then(avg => res.send({average: avg}))
});

//get info for the single campus:
router.get('/:schoolId/students/', (req, res, next) => {
    let schoolId = req.params.schoolId
		Student.findAll({where: {
			schoolId: schoolId
		}})
		.then(students => res.send(students))
});

//get school name (i dont want to talk about it)
router.get('/:schoolId/name/', (req, res, next) => {
    let schoolId = req.params.schoolId
		Campus.findById(schoolId)
		.then(school => res.send(school.name))
});

// make a new campus
router.post('/newCampus/', (req, res, next) => {
    Campus.create(req.body)
	.then(newcampus => res.send(newcampus))
	.catch(next);
});

//delete a campus
router.get('/delete/', (req, res, next) => {
	console.log('reaching delete api !!!')


	// let campusName = req.body.campusName;
	// Campus.findOne({where: {
	// 	name: campusName
	// }})
	// .then(foundCampus => {const found = foundCampus})
	// .then(	
	// 	Campus.destroy({where: {name: campusName}})
	// )
	// .then(() => res.send(found))
	// .catch(next)

})
/*

router.delete('/:id', function (req, res, next) {
  req.story.destroy()
  .then(function () {
    res.status(204).end();
  })
  .catch(next);
});

*/

module.exports = router;