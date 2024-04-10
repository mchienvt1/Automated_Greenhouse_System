const Log= require('../model/log')

class LogInterface{
    constructor(){
        this.log = Log
    }
    async createLog(data){
        try{
            const log = new this.log(data)
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