const express = require('express');
const router = express.Router();
const LogController = require('../controller/log')

router.get('/', LogController.getLogs);

module.exports = router;