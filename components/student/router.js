const router = require('express').Router();
const studentController = require('./controller');
const middlewares = require('../auth/middlewares');

router.post('/', studentController.register);
router.get('/:class', middlewares.authMiddleware ,studentController.showStudentsByClass);


module.exports = router;