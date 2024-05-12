const scheduleInterface = require('../database/interface/schedule.js');
const Task  = require('../database/utils/task.js');
const IoTInterface = require('../IOT/IoT.js');
class SchedulerController{
    async createSchedule(req, res){
        try {
            const {
                weekdays,
                timeStart,
                timeEnd,
                description,
                action,
                user_id
            } = req.body;
            const device_id = '1';
            const actionFeed = (action === 'lighting') ? 'led' :  (action === 'pumping') ? 'pumper' : res.status(400).json({msg : 'Invalid action'});
            const {activate, deactivate} = IoTInterface.getControl(actionFeed);
            const taskStart = new Task(weekdays, timeStart, activate);
            const taskEnd = new Task(weekdays, timeEnd, deactivate);
            const info = {user_id : user_id, device_id: device_id, description: description};
            const time = {timeStart : timeStart, timeEnd : timeEnd, weekdays : weekdays};
            const taskList =  {taskStart : taskStart, taskEnd : taskEnd};
            const task = await scheduleInterface.createSchedule(info, time, taskList);
            
        } catch (err){
            console.log(err);
        }
    }


}