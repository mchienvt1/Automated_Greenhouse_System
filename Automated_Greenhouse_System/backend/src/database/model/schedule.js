const mongoose = require('mongoose');
const Schedule = require('../utils/schedule.js');
const IoT = require('../../IOT/IoT.js');
const userSchema= require('./user.js');
const deviceSchema = require('./device.js'); 
const IoTInterface = require('../../IOT/IoT.js');

const scheduleTaskSchema = mongoose.Schema({
    task_id : {
        required : true,
        type : String,
    },
    device_id : {
        required : true,
        type : deviceSchema.device_id,
    },
    user_id : {
        required : true,
        type : userSchema.user_id,
    },
    description : {
        required : true,
        type : String,
    },
    time : {
        required: true,
        type: Schedule
    },
    action : {
        required : true,
        type : IoTInterface
    },
    deleted : {
        required : false,
        type : Boolean,
    }
})

module.exports = mongoose.model('ScheduleTask', scheduleTaskSchema)