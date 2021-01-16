const router = require('express').Router();
const sheetController = require('./controller');

router.post('/sheets', sheetController.createSheet);
router.get('/sheets/allsheets', sheetController.getAllSheets);
router.delete('/sheets', sheetController.removeSheet);
router.patch('/sheets', sheetController.resolveSheet);

module.exports = router;