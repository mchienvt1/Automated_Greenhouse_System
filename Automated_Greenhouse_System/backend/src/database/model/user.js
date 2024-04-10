const mongoose = required('mongoose');

const userSchema = mongoose.Schema({
    user_id : {
        required : true,
        type : String,
    },
    password : {
        required : true,
        type : String,
    },
    username : {
        required: true,
        type: String
    },
    link_to_avatar : {
        type : String,
        required: false
    },
    DeviceList :{
        type : Array,
        required : true
    },
    TaskList : {
        type : Array,
        required : true
    }
})

module.exports = mongoose.module('User', userSchema)

