const router = require('express').Router();
const studentController = require('./controller');

router.post('/', studentController.register);
router.post('/login', studentController.login);

module.exports = router;