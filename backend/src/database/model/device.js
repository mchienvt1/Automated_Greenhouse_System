const mongoose = require('mongoose');

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
        type: string,
        required: false
    },
    task : {
        type : Array,
        required : true
    }
})

module.exports = mongoose.model('Device', deviceSchema)