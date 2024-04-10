const mongoose = require('mongoose');

const device = require('./device.js');
const log = require('../interface/log.js');

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
        type : Map,
        required : true,
    },
    controlStatus :{ 
        type : Map,
        required : true,
    }
})

module.exports = mongoose.model('Log', logSchema)