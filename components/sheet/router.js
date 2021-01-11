const router = require('express').Router();
const sheetController = require('./controller');

router.post('/', sheetController.createSheet);


module.exports = router;