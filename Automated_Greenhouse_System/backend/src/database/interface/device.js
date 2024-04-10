const { mongooseToObject, mutipleMongooseObject} = require('../utils/mongoose.js');
const Device = require('../model/device.js');

class DeviceInterface{
    constructor(){
        this.count = 0;
    }
    async createDevice(name, img, location){
        try {
            const newDevice = new Device({
                device_id : this.count++,
                name : name,
                status : "OFF",
                image : img,
                type : "SENSOR",
                location : location,
                task : [],
                threshold : {
                    HUMIDITY : [0, 100],
                    TEMPERATURE : [0, 100],
                    LIGHT : [0, 100],
                    MOISTURE : [0, 100]
                }
            });
            // console.log(newDevice);
            return await newDevice.save();
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async getDeviceById(device_id){
        try {
            return await this.device.findOne({device_id : device_id});
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async deleteDeviceById(device_id){
        try {
            return await this.device.deleteOne({device_id : device_id});
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async updateDeviceById(device_id, device){
        try {
            return await this.device.updateOne({device_id : device_id}, device);
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async getTaskList(device_id){
        try {
            return await this.device.findOne({device_id : device_id}).select('task').then(
                (tasklist) => mutipleMongooseObject(tasklist)
            );
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

    async addTask(device_id, task){
        try {
            return await this.device.updateOne({device_id : device_id}, {$push : {task : task}});
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }
    async turnOn(device_id){
        try {
            // TODO add a function call to IoT to enable, disable it
            
            return await this.device.updateOne({device_id : device_id}, {status : "ON"});

        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }
    async turnOff(device_id){
        try {
            // TODO add a function call to IoT to enable, disable it
            
            return await this.device.updateOne({device_id : device_id}, {status : "OFF"});

        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }
}

module.exports = new DeviceInterface();