const router = require('express').Router();
const sheetController = require('./controller');

router.post('/', sheetController.createSheet);
router.get('/', sheetController.getAllSheets);
router.get('/:id', sheetController.findSheet);
router.delete('/', sheetController.removeSheet);
router.patch('/', sheetController.resolveSheet);

//router.post('/sheets/send', sheetController.sendSheet);
module.exports = router;