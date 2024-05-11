const mqtt = require('mqtt');
const username = process.env.ADAFRUIT_USERNAME;
const key = process.env.ADAFRUIT_KEY;

const brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`
const options = { port : 443 }

const broker = mqtt.connect(brokerUrl, options);

broker.on('connect', () => {
    console.log("Connected to Adafruit!")
});
broker.on('disconnect', () => {
    console.log("Disconnected to Adafruit!")
})

broker.on('message', (topic, message, packet) => {
        // console.log("Received '" + message + "' on '" + topic + "'");
})

function subscribe(feed_id){
    broker.subscribe(username + "/feeds/" + feed_id,()=>{
        // console.log("Subscribed to " + feed_id)
    })
}
function subscribeAll(){
    try {
        // console.log('Subscribing to all feeds')
        subscribe('humidity')
        subscribe('light')
        subscribe('temperature')
        subscribe('pumper')
        subscribe('led')
        subscribe('soil-humidity')
        // console.log('Subscribed to all feeds')
        console.log(`[*] Subcribed to all feeds at ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}`)
    }
    catch (error) {
        console.log(error)
    }
}
subscribeAll();

function publish(feed_id,data){
    broker.publish(username + "/feeds/" + feed_id,data,()=>{
        // console.log("Published to " + feed_id + " : " + data);
    });
}
module.exports = { broker , publish };