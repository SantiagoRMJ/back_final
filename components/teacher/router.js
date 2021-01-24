const router = require('express').Router();
const teacherController = require('./controller');


router.post('/', teacherController.register);
router.get('/:id', teacherController.showStudentsById);

module.exports = router;