const router = require('express').Router();
const sheetController = require('./controller');

router.post('/', sheetController.sendSheet);
router.get('/student/:id', sheetController.findStudentSheets);
router.get('/:id', sheetController.findSheet);
router.get('/', sheetController.getAllSheets);
router.delete('/:id', sheetController.removeSheet);
router.patch('/:id', sheetController.resolveSheet);

//router.post('/sheets/send', sheetController.sendSheet);
module.exports = router;