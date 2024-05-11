const express = require('express');
const route = require('./routes/index.js');
const app  = express()
const db = require('./database/config/moongose.js');
const IoTInterface  = require('./IOT/IoT.js');
const State = require('./database/config/index.js');
// var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
db.connect();


app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    }),
);

route(app)

const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
setInterval(() => {
    //console.log(`Pulling data at ${time}`)
    IoTInterface.pullData(1);
}, 6000)

process.once('SIGNUP', () => {
    cleanup();
});


app.listen(PORT, () => {
    console.log(`[*] Server Started at ${PORT} at ${time}`);
});


function cleanup() {
    console.log(`[*] Server Stopped at ${time}`);
    State.saveConfig();
    process.exit();
}

// Listen for the 'exit' event on the process object
process.on('exit', cleanup);

// Listen for the 'SIGINT' event (Ctrl+C) and perform cleanup
process.on('SIGINT', () => {
    cleanup();
    // Terminate the process manually after cleanup
    process.exit();
});

// Listen for the 'SIGTERM' event and perform cleanup
process.on('SIGTERM', () => {
    cleanup();
    // Terminate the process manually after cleanup
    process.exit();
});
