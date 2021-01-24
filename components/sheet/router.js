const router = require('express').Router();
const sheetController = require('./controller');

router.post('/', sheetController.createSheet);
router.get('/:student', sheetController.findStudentSheets);
router.get('/', sheetController.getAllSheets);
router.delete('/', sheetController.removeSheet);
router.patch('/:id', sheetController.resolveSheet);

//router.post('/sheets/send', sheetController.sendSheet);
module.exports = router;