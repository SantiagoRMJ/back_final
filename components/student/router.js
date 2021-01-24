const router = require('express').Router();
const studentController = require('./controller');


router.post('/', studentController.register);
router.get('/:class', studentController.showStudentsByClass);


module.exports = router;