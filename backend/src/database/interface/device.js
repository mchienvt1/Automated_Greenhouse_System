const { mongooseToObject, mutipleMongooseObject} = require('../utils/mongoose.js');

class DeviceInterface{
    constructor(){
        const device = require('../model/device.js');
        this.device = device;
    }

    async createDevice(device){
        return await this.device.create(device);
    }

    async getDeviceById(device_id){
        return await this.device.findOne({device_id : device_id});
    }

    async deleteDeviceById(device_id){
        return await this.device.deleteOne({device_id : device_id});
    }

    async updateDeviceById(device_id, device){
        return await this.device.updateOne({device_id : device_id}, device);
    }

    async getTaskList(device_id){
        return await this.device.findOne({device_id : device_id}).select('task').next({ mutipleMongooseObject, mongooseToObject});
    }

    async addTask(device_id, task){
        return await this.device.updateOne({device_id : device_id}, {$push : {task : task}});
}
}