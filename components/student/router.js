const router = require('express').Router();
const studentController = require('./controller');
const auth = require('../auth/auth')

router.post('/', studentController.register);
router.post('/login', auth.login);

module.exports = router;