const express = require('express');
const route = require('./routes/index.js');
const app  = express()
const db = require('./database/config/index.js');

const PORT = process.env.PORT || 8080;

db.connect();

app.use(
    express.urlencoded({
        extended: true
    }),
    express.json(),
)

// route(app)


app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});