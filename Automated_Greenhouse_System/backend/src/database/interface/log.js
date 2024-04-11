const Log= require('../model/log')
const { mutipleMongooseObject, mongooseToObject} = require('../utils/mongoose.js');
const state = require('../config/state.json');

class LogInterface{
    constructor(){
        this.count = 11;
    }
    async createLog(device_id, data_retrieve, time){
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
            const log = new Log({
                log_id : this.count++,
                device_id : device_id,
                time : time,
                value :value,
                controlStatus : controlStatus
            })
            console.log(`Log added ${this.count}`)
            await log.save()
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
}

module.exports = new LogInterface();