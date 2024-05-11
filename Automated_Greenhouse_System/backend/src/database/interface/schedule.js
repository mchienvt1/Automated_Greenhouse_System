const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');
const Schedule = require('../model/schedule.js');
const State = require('../config/state.js');
class ScheduleInterface{
    constructor(){
    //     this.schedule = require('../model/schedule.js');
        this.count = 1;
    }
    async createSchedule(user_id, device_id, task_id, description, time, action){
        try {
            const schedule = new Schedule ({
                task_id : State.getScheduleIndex(),
                user_id : user_id,
                device_id : device_id,
                task_id : task_id,
                description : description,
                time : time,
                action : action
            })
            return await schedule.save()
        } catch (error) {
            // Handle the error here
            console.error(error);
            return null
        }
    }
    async deleteSchedule(task_id){
        try {
            return await this.schedule.updateOne({task_id : task_id}, {deleted : true});
        } catch (error) {
            // Handle the error here
            console.error(error);
            // throw error;
            return null
        }
    }
    async eliminateSchedule(task_id){
        try {
            return await Schedule.deleteOne({task_id : task_id});
        } catch (error) {
            // Handle the error here
            console.error(error);
            return null
        }
    }
    async getByDevice(device_id){
        try {
            return await Schedule.find({device_id : device_id}).sort({time :-1}).then(
                (tasklist) => mutipleMongooseObject(tasklist)
            );
        } catch (error) {
            // Handle the error here
            console.error(error);
            return null
        }
    }
}

module.exports = ScheduleInterface;