'use strict'
const router = require('express').Router();
const Student = require('../../db/models/user');
const Campus = require('../../db/models/campus');


/* ------------ get school by id ------------ */
router.get('/student-school/:id', (req, res) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then(student => student.getSchool()
	.then(school => res.send({name: school.name})))
});

/* ------------ get all students ------------ */
router.get('/all-students', (req, res, next) => {
	Student.findAll({})
	.then((students) => res.send(students))
	.catch(next);
})

/* ------------ get student by id ------------ */
router.get('/student/:id', (req, res, next) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then((student) => res.json(student))
	.catch(next);
});

/* ------------ get one student gpa ------------ */
router.get('/student/:id/gpa', (req, res, next) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then((student) => res.send({gpa: student.gpa}))
	.catch(next);
});

/* ------------ get campus id for link ------------ */
router.get('/student/:id/campusId', (req, res, next) => {
	Student.findById(req.params.id)
	.then((student) => res.send({campusId: student.schoolId}))
	.catch(next);
});


/* ------------ get student name by id ------------ */
router.get('/student/:id/name', (req, res, next) => {
	Student.findOne({where:{
		id: req.params.id
	}})
	.then((student) => res.send({name: student.name}))
	.catch(next);
});

/* ------------ add a new student ------------ */
router.post('/student/addnew/', (req, res, next) => {
	Student.create(req.body)
	.then(newStudent => newStudent.setSchool(schoolId))
	.catch(next);
});

/* ------------ delete a student ------------ */
router.delete('/delete/:studentName', (req, res, next) => {
	let studentName = req.params.studentName;

	Student.destroy({where: {
		name: studentName
	}})
	.then(() => res.status(204).end)
	.catch(next);
	
});

/* ------------ update a student ------------ */
router.put('/:studentName', (req, res, next) => {
	let studentName = req.params.studentName;
	let updatedInfo = req.body;

	Student.findOne({where: {
		name: studentName
	}})
	.then(foundStudent => foundStudent.update({
		major: updatedInfo.major || foundStudent.major,
		email: updatedInfo.email || foundStudent.email,
		grade: updatedInfo.grade || foundStudent.grade,
		schoolId: updatedInfo.schoolId || foundStudent.schoolId
	}))
	.then(() => res.status(200).end)
	.catch(next);
});


module.exports = router;