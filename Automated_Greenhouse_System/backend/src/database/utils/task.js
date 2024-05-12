const schedule = require('node-schedule');

class Task{
    constructor(date, time, action){
        let weekstr = '';
        for (let i = 0; i < 7; i++){
            if (date.includes(i))
                weekstr += i + ',';
        }
        if (weekstr.length > 0)
            weekstr = weekstr.slice(0, -1);
        const [hours, minutes] = time.split(':');
        this.expr = `${minutes} ${hours} * * ${weekstr}`;
        this.action = action;
        this.automate = schedule.scheduleJob(this.expr, this.action);
    }
    update(date, time){
        let weekstr = '';
        for (let i = 0; i < 7; i++){
            if (date.includes(i))
                weekstr += i + ',';
        }
        if (weekstr.length > 0)
            weekstr = weekstr.slice(0, -1);
        const [hours, minutes] = time.split(':');
        this.expr = `${minutes} ${hours} * * ${weekstr}`;
        this.automate.reschedule(this.expr);
        return
    }
    exportCron(){
        return this.expr;
    }
    cancel(){
        this.automate.cancel();
    }
}

module.exports = Task;