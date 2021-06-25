let http = require("http"),
    https = require("https");
var env = require('../environment');

/**
* getJSON:  REST get request returning JSON object(s)
* @param options: http options object
*/
requestJSON = function (options) {
    let reqHandler =  https;
    return new Promise((resolve, reject) => {
        let req = reqHandler.request(options, (res) => {
            let output = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                output += chunk;
            });
            res.on('end', () => {
                try {
                    let obj = JSON.parse(output);
                    resolve({
                        statusCode: res.statusCode,
                        data: obj
                    });
                }
                catch (err) {
                    reject(err);
                }
            });
        });
        req.on('error', (err) => {
            reject(err);
        });
        req.end();
    });
};

exports.getJSON =  function(url) {
    let options = {
        host: env.apiURL,
        path: url,
        method: 'GET',
    }
    return requestJSON(options);
}