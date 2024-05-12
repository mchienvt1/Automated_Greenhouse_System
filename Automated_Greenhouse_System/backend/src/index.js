require('dotenv').config({ path: '../.env' });
const express = require('express');
const route = require('./routes/index.js');
const app  = express()
const db = require('./database/config/moongose.js');
const IoTInterface  = require('./IOT/IoT.js');
const { getTime, gracefulShutdown} = require('./utils/syslog.js');
const PORT = process.env.PORT || 8080;
const cors = require('cors');

db.connect();

gracefulShutdown();
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    }),
);

route(app)

IoTInterface.pullData(1);
// const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
setInterval(() => {
    //console.log(`Pulling data at ${time}`)
    IoTInterface.pullData(1);
}, 60000)


app.listen(PORT, () => {
    console.log(`[*] Server Started at ${PORT} at ${getTime()}`);
});


