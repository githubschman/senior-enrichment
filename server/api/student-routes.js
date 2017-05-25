'use strict'
const router = require('express').Router();
const db = require('../../db');

const Student = require('../../db/models/user');
const Campus = require('../../db/models/campus');


//get the school of a student by their ID
router.get('/student-school/:id', (req, res) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then(student => student.getSchool()
	.then(school => res.send({name: school.name})))
});

//get all students
router.get('/all-students', (req, res, next) => {
	Student.findAll({})
	.then((students) => res.send(students))
	.catch(next);
})

//get student by id
router.get('/student/:id', (req, res, next) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then((student) => res.json(student))
	.catch(next);
});

//get student gpa by id
router.get('/student/:id/gpa', (req, res, next) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then((student) => res.send({gpa: student.gpa}))
	.catch(next);
});

//get student name by id
router.get('/student/:id/name', (req, res, next) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then((student) => res.send({name: student.name}))
	.catch(next);
});




module.exports = router;