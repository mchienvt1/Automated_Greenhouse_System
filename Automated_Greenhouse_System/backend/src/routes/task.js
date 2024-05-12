const express = require('express');
const router = express.Router();

const SchedulerController = require('../controller/schedule.js');

router.post('/add',  SchedulerController.createSchedule)

module.exports = router;
