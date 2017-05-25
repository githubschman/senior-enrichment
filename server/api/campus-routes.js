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

router.get('/:schoolId/name/', (req, res, next) => {
    let schoolId = req.params.schoolId
		Campus.findById(schoolId)
		.then(school => res.send(school.name))
});


module.exports = router;