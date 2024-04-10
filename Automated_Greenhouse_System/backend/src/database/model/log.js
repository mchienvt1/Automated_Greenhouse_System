const mongoose = require('mongoose');

const device = require('./device.js');

const datatype = {
    HUMIDITY : "HUMIDITY",
    TEMPERATURE : "TEMPERATURE",
    LIGHT : "LIGHT"
}

const logSchema = mongoose.Schema({
    device_id : {
        required : true,
        type : device.device_id,
    },
    time : {
        required : true,
        type : Date,
    },
    value : {
        required : true,
        type : String,
    },
    type : {
        required : true,
        type : datatype,
    }
})

module.exports = mongoose.model('Log', logSchema)