const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');
const Schedule = require('../model/schedule.js');
const State = require('../config/state.js');
const Task = require('../utils/task.js');

class ScheduleInterface{
    async createSchedule(info, time, task){
        try {
            const {
                user_id, device_id,description,
            } = info;
            const {
              timeStart, timeEnd, weeksday
            } = time;
            const {
                taskStart, taskEnd
            } = task
            const schedule = new Schedule ({
                task_id : State.getTaskIndex(),
                user_id : user_id,
                device_id : device_id,
                description : description,
                time : { start : timeStart, end : timeEnd},
                days : weeksday,
                taskStart : taskStart,
                taskEnd : taskEnd 
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

module.exports = new ScheduleInterface();