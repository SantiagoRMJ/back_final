const router = require('express').Router();
const teacherController = require('./controller');

router.post('/teacher', teacherController.registro);
router.post('/teacher/login', teacherController.login);

module.exports = router;