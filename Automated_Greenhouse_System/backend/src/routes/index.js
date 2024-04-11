const logRoute = require('./log');

function route(app) {
    app.use('/log', logRoute);

}

module.exports = route;