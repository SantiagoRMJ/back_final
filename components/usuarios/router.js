const router = require('express').Router();
const userController = require('./controller');

router.post('/', userController.registro);
router.post('/login', userController.login);

module.exports = router;