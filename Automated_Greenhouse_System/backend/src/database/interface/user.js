const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');

class UserInterface{
    constructor(){
        const user = require('../model/user.js');
        this.user = user;
    }

    async createUser(user){
        return await this.user.create(user);
    }

    async getUserById(user_id){
        return await this.user.findOne({user_id : user_id});
    }

    async deleteUserById(user_id){
        return await this.user.deleteOne({user_id : user_id});
    }

    async updateUserById(user_id, user){
        return await this.user.updateOne({user_id : user_id}, user);
    }

    async getTaskList(user_id){
        return await this.user.findOne({user_id : user_id}).select('TaskList').next({ mutipleMongooseObject, mongooseToObject});
    }

    async getDeviceList(user_id){
        return await this.user.findOne({user_id : user_id}).select('DeviceList').next({ mutipleMongooseObject, mongooseToObject});
    }
}

module.exports = UserInterface;