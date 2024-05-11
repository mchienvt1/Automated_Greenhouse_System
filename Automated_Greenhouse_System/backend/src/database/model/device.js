const mongoose = require('mongoose');
const datatype = {
    HUMIDITY : "HUMIDITY",
    TEMPERATURE : "TEMPERATURE",
    LIGHT : "LIGHT",
    MOISTURE : "MOISTURE"
}

const deviceSchema = mongoose.Schema({
    device_id : {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status :{
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : false,
    },
    type : {
        type : String,
        required : true,
    },
    location : {
        type: String,
        required: false
    },
    control : {
        'light' : {
            type : Boolean,
            required : true
        },
        'pump' : {
            type : Boolean,
            required : true
        },

    }
    ,
    task : {
        type : Array,
        required : true
    },
    threshold :{
        type : Map, // Map each datatype to a set of threshold values string -> array
        required : true
    }
})

module.exports = mongoose.model('Device', deviceSchema)