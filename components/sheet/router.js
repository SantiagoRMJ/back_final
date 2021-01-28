const router = require('express').Router();
const sheetController = require('./controller');
const middlewares = require('../auth/middlewares');

router.post('/', middlewares.authMiddleware ,sheetController.sendSheet);
router.get('/student/:id', middlewares.authMiddleware, sheetController.findStudentSheets);
router.get('/:id', middlewares.authMiddleware, sheetController.findSheet);
router.get('/', sheetController.getAllSheets);
router.delete('/:id', middlewares.authMiddleware,sheetController.removeSheet);
router.patch('/:id', middlewares.authMiddleware, sheetController.resolveSheet);

//router.post('/sheets/send', sheetController.sendSheet);
module.exports = router;