'use strict'
const router = require('express').Router();
const db = require('../../db');

const Student = require('../../db/models/user');
const Campus = require('../../db/models/campus');


//find all campuses
router.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then((campuses) => res.send(campuses))
	.catch(next);
});

//get gpa average for one campus
router.get('/:schoolId/info', (req, res) => {
    let schoolId = req.params.schoolId
	Student.getGPA(schoolId)
	.then(avg => res.send({average: avg}))
});

//get campus by id
router.get('/campuses/:id', (req, res, next) => {
	let findingCampus = Campus.findOne({where:{
		id: req.params.id
	}})
	let findingStudents = Student.findAll({where:{
		schoolId: req.params.id
	}})
	.catch(next);

	Promise.all([findingCampus, findingStudents])
	.then(info => res.json(info))
	.catch(next);
});

module.exports = router;