const Log= require('../model/log')
const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');
const State = require('../config/state.js');
const {getTime} = require('../../utils/syslog.js'); 
class LogInterface{
    async createLog(device_id, data_retrieve){
        try{
            const datatype = {
                HUMIDITY : "HUMIDITY",
                TEMPERATURE : "TEMPERATURE",
                LIGHT : "LIGHT",
                MOISTURE : "MOISTURE"
            }
            const value = {
                HUMIDITY : data_retrieve.humidity,
                TEMPERATURE : data_retrieve.temperature,
                LIGHT : data_retrieve.lightIntensity,
                MOISTURE : data_retrieve.soilHumidity
            }
            const controlStatus = {
                LIGHT : data_retrieve.lightBtn,
                PUMP : data_retrieve.pumperBtn
            }
            const id = State.getLogIndex();
            const log = new Log({
                log_id : id,
                device_id : device_id,
                time : Date.now(),
                value :value,
                controlStatus : controlStatus
            })
            const time = getTime();
            console.log(`[*] Log ${id} added at ${time}`)
            await log.save()
            // fs.writeFileSync('src/database/config/state.json', JSON.stringify(this.config, null, 2));
            return log

        }catch(error){
            console.log(error)
            return null
        }
    }
    async getLogs(device_id){
        try {
            const logs = await Log.find({device_id : device_id}).then(
                (logs) => logs.map((log) => ({
                    id : log.log_id,
                    time : new Date(log.time),
                    humidity : log.value.HUMIDITY,
                    temperature : log.value.TEMPERATURE,
                    lightIntensity : log.value.LIGHT,
                    soilHumidity : log.value.MOISTURE,
                    lightBtn : log.controlStatus.LIGHT,
                    pumperBtn : log.controlStatus.PUMP,
                }))
            );
            // console.log(logs);
            return logs;
        } catch(error){
            console.log(error);
            return null;

        }
    }
    async getLastLog(device_id){
        try{
            const log = await Log.find({device_id : device_id}).sort({time : -1}).limit(1)
            .then(
                (logs) => logs.map((log) => ({
                    id : log.log_id,
                    time : log.time,
                    humidity : log.value.HUMIDITY,
                    temperature : log.value.TEMPERATURE,
                    lightIntensity : log.value.LIGHT,
                    soilHumidity : log.value.MOISTURE,
                    lightBtn : log.controlStatus.LIGHT,
                    pumperBtn : log.controlStatus.PUMP,
                }))
            );
            console.log(log);
            return log;
        } catch(error){
            console.log(error);
            return null;
        }  
    }
    async getAverage(device_id, timeframe){
        try {
            const now = new Date();
            const from = new Date(now);
            from.setDate(from.getDate() - timeframe);
            console.log(from);
            console.log(now);
            const logs = await Log.find({device_id : device_id, time : {$gte : from, $lte : now}}).then(
                (logs) => logs.map((log) => ({
                    id : log.log_id,
                    time : log.time,
                    humidity : log.value.HUMIDITY,
                    temperature : log.value.TEMPERATURE,
                    lightIntensity : log.value.LIGHT,
                    soilHumidity : log.value.MOISTURE,
                    lightBtn : log.controlStatus.LIGHT,
                    pumperBtn : log.controlStatus.PUMP,
                }))
            );
            return logs;
        } catch (error) {
            console.log(error);
            return null;
        }


    }
}

module.exports = new LogInterface();