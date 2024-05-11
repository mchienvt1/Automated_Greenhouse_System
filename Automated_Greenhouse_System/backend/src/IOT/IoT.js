const { broker, publish } = require('./broker');
const axios = require('axios');
const Log = require('../database/interface/log');


class IoTInterface {
    constructor() { 
        // Some data to be filled
    }
    async getLastValue(feed_id){
        const username = process.env.VITE_ADAFRUIT_USERNAME;
        const key = process.env.VITE_ADAFRUIT_KEY;
        console.log(username, key);
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
            // soilHumidity: await this.getLastValue('soil-humidity'),
            // lightIntensity: await this.getLastValue('light'),
            // humidity: await this.getLastValue('humidity'),
            // lightBtn: await this.getLastValue('led'),
            // pumperBtn: await this.getLastValue('pumper')
        }
        // console.log(data_retrieve);
        // return await this.store(device_id, data_retrieve);
    };
    async store(device_id, data_retrieve){
        try {
            const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });

            await Log.createLog(device_id, data_retrieve, time);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    control(){
        return 
    };
    activate(){
        return
    };
    deactivate(){
        return
    };  
    control(){

    }
}



module.exports = new IoTInterface();