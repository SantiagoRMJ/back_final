const router = require('express').Router();
const teacherController = require('./controller');

router.post('/', teacherController.registro);
router.post('/login', teacherController.login);

module.exports = router;