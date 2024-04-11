const mongoose = require('mongoose');

const device = require('./device.js');
const log = require('../interface/log.js');
const { json } = require('express');

const datatype = {
    HUMIDITY : "HUMIDITY",
    TEMPERATURE : "TEMPERATURE",
    LIGHT : "LIGHT",
    MOISTURE : "MOISTURE"
}

const logSchema = mongoose.Schema({
    log_id : {
        type : String,
        required : true,
    },
    device_id : {
        type : String,
        required : true,
    },
    time : {
        type : String,
        required : true,
    },
    value : {
        type : String,
        required : true,
        get : function(data) {
            return JSON.parse(data);
        },
        set : function(data) {
            return JSON.stringify(data);
        }
    },
    controlStatus :{ 
        type : String,
        required : true,
        get : function(data) {
            return JSON.parse(data);
        },
        set : function(data) {
            return JSON.stringify(data);
        }
    }
})

module.exports = mongoose.model('Log', logSchema)