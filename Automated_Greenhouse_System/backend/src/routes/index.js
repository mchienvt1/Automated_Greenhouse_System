const logRoute = require('./log');
const userRoute = require('./user');
const taskRoute = require('./task');
function route(app) {
    app.use('/log', logRoute);
    app.use('/user', userRoute);
    app.use('/task', taskRoute);
}

module.exports = route;