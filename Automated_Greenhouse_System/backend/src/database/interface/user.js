const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');
const User  = require('../model/user.js');
const State = require('../config/state.js');
const { getTime } = require('../../utils/syslog.js');
class UserInterface{
    constructor(){
    }

    async createUser(username, password, link, email, fullname){
        try {
            const newUser = new User ({
                user_id : State.getUserIndex(),
                username : username,
                password : password,
                link_to_avatar : link,
                email : email,
                fullname : fullname, 
                DeviceList : [],
                TaskList : []
            });
            await newUser.save();
            console.log(`[*] User <${username}> added at ${getTime()}`);
        } catch (error) {
            // Handle error
            // console.log('Fail to create user')
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

    async getUserbyUsername(username){
        try {
            return await this.user.findOne({username : username});
        } catch (error) {
            // Handle error
            console.log(error);
        } finally {
            return  null;
            // Handle finally
        }
    }

    async getUserByUsername(username){
        try {
            return User.findOne({username : username});
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = new UserInterface();