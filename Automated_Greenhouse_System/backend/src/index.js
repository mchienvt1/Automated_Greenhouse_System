const express = require('express');
const route = require('./routes/index.js');
const app  = express()
const db = require('./database/config/index.js');
const IoTInterface  = require('./IOT/IoT.js');
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

// IoTInterface.pullData(1);
setInterval(() => {
        const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        //console.log(`Pulling data at ${time}`)
}, 60000)

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});

