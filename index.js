var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

function get(url) {
    var childArgs = [
        path.join(__dirname, 'lib/get.js'),
        url
    ];
    return new Promise(function (resolve, reject) {
        childProcess.execFile(binPath, childArgs, {
            maxBuffer: Number.MAX_VALUE
        }, function (err, stdout, stderr) {
            if (err) {
                reject(err);
            } else if (stdout) {
                resolve(stdout);
            } else {
                resolve('error' + JSON.stringify(stderr));
            }
        });
    })
}

module.exports = {
    get: get
};