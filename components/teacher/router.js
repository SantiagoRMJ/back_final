const router = require('express').Router();
const teacherController = require('./controller');
const auth =require('../auth/auth')

router.post('/teacher', teacherController.register);
router.post('/login', auth.login);

module.exports = router;