const express = require ('express');
const { getAllStudents, createStudent, deletStudent } = require('../controller/studentController');

const router = express.Router();

router.get('/students',getAllStudents);
router.post('/crestd',createStudent);
router.delete('/delstd',deletStudent);

module.exports = router;