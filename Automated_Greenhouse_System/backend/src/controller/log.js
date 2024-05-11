const Log = require('../database/interface/log.js')

class LogController {
    async getLogs(req, res) {
        try {
            const device_id = '1';
            // console.log(device_id)
            // console.log(req.body)
            const logs = await Log.getLogs(device_id);
            // console.log(logs)
            return res.status(200).json(logs);
        } catch (error){
            console.log(error)
            res.status(500).send('Internal Server Error')
        }
    }
    async getLastLog(req, res) {
        try {
            const device_id = '1';
            const log = await Log.getLastLog(device_id);
            return res.status(200).json(log);
        } catch (error){
            console.log(error)
            res.status(500).send('Internal Server Error')
        }
    }
    async getAverage(req,res){
        try {
            const {timeframe} = req.body; // time frame is in date
            const device_id = '1';
            const {} = await Log.getAverage(device_id, timeframe).then(
                data => {
                    let count = 0;
                    let sum = [0,0,0,0];
                    data.forEach(log => {
                        sum[0] += parseFloat(log.humidity);
                        sum[1] += parseFloat(log.temperature);
                        sum[2] += parseFloat(log.lightIntensity);
                        sum[3] += parseFloat(log.soilHumidity);
                        count += 1;
                    });
                    if (count == 0){
                        return res.status(404).send({msg: 'No data found'});
                    }
                    return res.status(200).json({
                        humidity : sum[0]/count,
                        temperature : sum[1]/count,
                        lightIntensity : sum[2]/count,
                        soilHumidity : sum[3]/count
                    });
                }
            ).catch(err => {
                console.log(err);
                return res.status(500).send({msg: 'Internal Server Error'});
            });
        } catch (error){
            return res.status(500).send({msg: 'Internal Server Error'});
        }

    }
}

module.exports = new LogController();