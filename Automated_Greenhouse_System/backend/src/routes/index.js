const logRoute = require('./log');
const userRoute = require('./user');
function route(app) {
    app.use('/log', logRoute);
    app.use('/user', userRoute);
}

module.exports = route;