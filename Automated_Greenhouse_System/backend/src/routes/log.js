const express = require('express');
const router = express.Router();
const LogController = require('../controller/log')

router.get('/', LogController.getLogs);
router.get('/last', LogController.getLastLog);
module.exports = router;