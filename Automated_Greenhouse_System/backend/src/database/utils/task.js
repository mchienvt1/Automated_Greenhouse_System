const cron = require('cron');
const IoT = require('../../IOT/IoT.js');
class Task{
    constructor(date, time, mode, feed){
        let weekstr = '';
        for (let i = 0; i < 7; i++){
            if (date.includes(i))
                weekstr += i + ',';
        }
        if (weekstr.length > 0)
            weekstr = weekstr.slice(0, -1);
        const [hours, minutes] = time.split(':');
        this.expr = `00 ${minutes} ${hours} * * ${weekstr}`;
        this.action = IoT.getControl(feed)[mode];
        // this.action()
        console.log(this.expr, feed)

        this.automate = new cron.CronJob(this.expr, this.action, null, true, 'Asia/Ho_Chi_Minh');
        this.automate.start();
        // console.log(this.automate)
        this.mode = mode;
        this.feed = feed;
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
    // exportCron(){
    //     return this.expr;
    // }
    // cancel(){
    //     this.automate.cancel();
    // }
    toJSON() {
        return {
            expr : this.expr,
            mode : this.mode,
            feed : this.feed
            // action : this.action
        };
    }
    fromJSON(json){
        this.expr = json.expr;
        this.action = IoT.getControl(json.feed)[json.mode];
        this.automate = schedule.schedule(this.expr, this.action);
    }
}

module.exports = Task;