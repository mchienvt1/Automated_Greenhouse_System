const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');
const User  = require('../model/user.js');
class UserInterface{
    constructor(){
        // this.schedule = require('../model/schedule.js');
        this.count = 0
    }

    async createUser(username, password, link){
        try {
            const newUser = new User ({
                user_id : this.count++,
                username : username,
                password : password,
                link_to_avatar : link,
                DeviceList : [],
                TaskList : []
            });
            await newUser.save();
            console.log(newUser)
            console.log('Create user successfully');
        } catch (error) {
            // Handle error
            console.log('Fail to create user')
            console.log(error);
            return null;
        }
    }

    async getUserById(user_id){
        try {
            return await User.findOne({user_id : user_id});
        } catch (error) {
            // Handle error
            return null;
        }
    }

    async deleteUserById(user_id){
        try {
            return await this.user.deleteOne({user_id : user_id});
        } catch (error) {
            // Handle error
        }
    }

    async updateUserById(user_id, user){
        try {
            return await this.user.updateOne({user_id : user_id}, user);
        } catch (error) {
            // Handle error
        }
    }

    async getTaskList(user_id){
        try {
            return await this.user.findOne({user_id : user_id}).select('TaskList').next({ mutipleMongooseObject, mongooseToObject});
        } catch (error) {
            // Handle error
        }
    }

    async getDeviceList(user_id){
        try {
            return await this.user.findOne({user_id : user_id}).select('DeviceList').next({ mutipleMongooseObject, mongooseToObject});
        } catch (error) {
            // Handle error
        }
    }
}

module.exports = new UserInterface();