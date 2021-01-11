const router = require('express').Router();
const studentController = require('./controller');

router.post('/', studentController.registro);
router.post('/login', studentController.login);

module.exports = router;