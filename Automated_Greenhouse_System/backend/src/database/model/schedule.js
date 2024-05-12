const mongoose = require('mongoose');
const Task = require('../utils/task.js');
const IoT = require('../../IOT/IoT.js');
const userSchema= require('./user.js');
const deviceSchema = require('./device.js'); 
const IoTInterface = require('../../IOT/IoT.js');

const Schedule = mongoose.Schema({
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
        start : {
            required : true,
            type : String
        },
        end : {
            required : true,
            type : String
        },
        type: Object,
        get : function(value){
            return JSON.parse(value);
        },
        set : function(value){
            return JSON.stringify(value);
        }
    },
    days : {
        required : true,
        type : Array,
    },
    taskStart : {
        required : true,
        type : Task,
        get : function(value){
            return JSON.parse(value); 
        },
        set : function(value){
            return JSON.stringify(value);
        }
    },
    taskEnd : {
        required : true,
        type : Task,
        get : function(value){
            return JSON.parse(value); 
        },
        set : function(value){
            return JSON.stringify(value);
        }
    },
    deleted : {
        required : false,
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Schedule', Schedule)