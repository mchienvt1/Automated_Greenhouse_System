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
}

module.exports = new LogController();