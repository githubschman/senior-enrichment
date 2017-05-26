'use strict'
const router = require('express').Router();
const Student = require('../../db/models/user');
const Campus = require('../../db/models/campus');


/* ------------ find all campuses ------------ */
router.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then((campuses) => res.send(campuses))
	.catch(next);
});

/* ------------ get gpa average ------------ */
router.get('/:schoolId/info', (req, res, next) => {
    let schoolId = req.params.schoolId
	Student.getGPA(schoolId)
	.then(avg => res.send({average: avg}))
});

/* ------------ get info for single campus ------------ */
router.get('/:schoolId/students/', (req, res, next) => {
    let schoolId = req.params.schoolId
		Student.findAll({where: {
			schoolId: schoolId
		}})
		.then(students => res.send(students))
});

/* ------------ get school name... ------------ */
//(i dont want to talk about it)
router.get('/:schoolId/name/', (req, res, next) => {
    let schoolId = req.params.schoolId
		Campus.findById(schoolId)
		.then(school => res.send(school.name))
});

/* ------------ add campus ------------ */
router.post('/newCampus/', (req, res, next) => {
    Campus.create(req.body)
	.then(newcampus => res.send(newcampus))
	.catch(next);
});

/* ------------ delete a campus ------------ */
router.delete('/delete/:campusName', (req, res, next) => {
	console.log('reaching delete api !!!')
	let campusName = req.params.campusName;

	Campus.destroy({where: {
		name: campusName
	}})
	.then(() => res.status(204).end)
	.catch(next);
	
});

router.put('/:campusName', (req, res, next) => {
	let campusName = req.params.campusName;
	let updatedInfo = req.body;

	Campus.findOne({where: {
		name: campusName
	}})
	.then(foundCampus => foundCampus.update({
		name: updatedInfo.name
	}))
	.then(() => res.status(200).end)
	.catch(next);
})


module.exports = router;