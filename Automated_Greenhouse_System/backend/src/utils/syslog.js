const State = require('../database/config/state.js');

function getTime(){
    return new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function cleanup() {
    console.log(`[*] Server Stopped at ${getTime()}`);
    State.saveConfig();
    process.exit();
}
function  gracefulShutdown() {
    process.once('SIGNUP', () => {
        cleanup();
    });
    // Listen for the 'exit' event on the process object
    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)
}

module.exports = { getTime , gracefulShutdown}