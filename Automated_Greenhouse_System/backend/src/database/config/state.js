const fs = require('fs');
class State{
    constructor(){
        this.configFile = fs.readFileSync('src/database/config/state.json');
        this.config = JSON.parse(this.configFile);
    }
    getLogIndex(){
        return this.config.log.index++;
    }
    getUserIndex(){
        return this.config.user.index++;
    }
    getDeviceIndex(){
        return this.config.device.index++;
    }
    getScheduleIndex(){
        return this.config.schedule.index++;
    }
    getTaskIndex(){
        return this.config.task.index++;
    }
    saveConfig(){
        fs.writeFileSync('src/database/config/state.json', JSON.stringify(this.config, null, 2));
        console.log('Config saved')
        console.log(this.config)
    }
}

module.exports = new State();