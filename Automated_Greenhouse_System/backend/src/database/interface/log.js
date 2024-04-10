const Log= require('../model/log')

class LogInterface{
    constructor(){
        this.count = 1;
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
                value : value,
                controlStatus : controlStatus
            })
            // console.log(log)
            await log.save()
            return log
        }catch(error){
            // console.log(error)
            return null
        }
    }
    async getLogs(device_id){
        try {
            const logs = await this.log.find({device_id})
            return logs
        } catch(error){
            // console.log(error)
            return null
        }
    }
}

module.exports = new LogInterface();