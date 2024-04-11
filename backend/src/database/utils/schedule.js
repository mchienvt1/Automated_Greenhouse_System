class Schedule{
    constructor(date, time){
        // Date format: Array: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday] 
        this.date = date;
        // Time format: Array[Array]: [[hour, minute]]
        this.time = time;
    }
    update(date, time){
        return
    }
    exportCron(){
        // Export the cron format
        return
    }
}

module.exports = Schedule;