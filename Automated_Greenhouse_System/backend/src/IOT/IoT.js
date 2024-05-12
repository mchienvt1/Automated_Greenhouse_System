const { broker, publish } = require('./broker');
const axios = require('axios');
const Log = require('../database/interface/log');
const { getTime } = require('../utils/syslog');


class IoTInterface {
    constructor() { 
    }
    async getLastValue(feed_id){
        const username = process.env.VITE_ADAFRUIT_USERNAME;
        const key = process.env.VITE_ADAFRUIT_KEY;
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data/last`;
        const options = {
            headers: {
              'X-AIO-Key': key
            }
          };

        let res = await axios.get(url, options);

        return res.data.value;
    }

    async pullData(device_id) {
        const data_retrieve ={
            temperature: await this.getLastValue('temperature'),
            soilHumidity: await this.getLastValue('soil-humidity'),
            lightIntensity: await this.getLastValue('light'),
            humidity: await this.getLastValue('humidity'),
            lightBtn: await this.getLastValue('led'),
            pumperBtn: await this.getLastValue('pumper')
        }
        // console.log(data_retrieve);
        return await this.store(device_id, data_retrieve);
    };
    async store(device_id, data_retrieve){
        try {
            await Log.createLog(device_id, data_retrieve);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    control(){
        return 
    };
    activate(feed_id){
        function callAPI(){
            const username = process.env.VITE_ADAFRUIT_USERNAME;
            const key = process.env.VITE_ADAFRUIT_KEY;
            const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data`;
            const options = {
                headers: {
                  'X-AIO-Key': key
                }
              };
            console.log(`[*] Schedule run ${feed_id} at ${getTime()}`)
            axios.post(url, {value: '1'}, options);
        }
        return callAPI
    };
    deactivate(feed_id){
        function callAPI(){
            const username = process.env.VITE_ADAFRUIT_USERNAME;
            const key = process.env.VITE_ADAFRUIT_KEY;
            const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data`;
            const options = {
                headers: {
                  'X-AIO-Key': key
                }
              };
            console.log(`[*] Schedule run ${feed_id} at ${getTime()}`)
            axios.post(url, {value: '0'}, options);
        }
        return callAPI
    };
    getControl(feed_id){
        return [this.activate(feed_id), this.deactivate(feed_id)]
    }
}

module.exports = new IoTInterface();