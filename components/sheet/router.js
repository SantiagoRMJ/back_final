const router = require('express').Router();
const sheetController = require('./controller');

router.post('/sheets', sheetController.createSheet);
router.get('/sheet/:_id', sheetController.findSheet);
router.get('/sheets', sheetController.getAllSheets);
router.delete('/sheets', sheetController.removeSheet);
router.patch('/sheets', sheetController.resolveSheet);

//router.post('/sheets/send', sheetController.sendSheet);
module.exports = router;