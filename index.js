
var jsforce = require('jsforce');

function login(config, cb) {
    var conn = new jsforce.Connection(config.connectionOptions);
    conn.login(config.username, config.password, function (err, res) {
        cb(err, conn);
    });
}

function salesforceCallGenerator(method, inputAttributes) {
    return function (input, config, cb) {
        login(config, function (err, conn) {
            if (err) {
                return cb(err);
            }
            var args = inputAttributes.map(function (inputAttributeName) {
                return input[inputAttributeName];
            });
            args.push(cb);

            conn[method].apply(conn, args);
        });
    };
}


var methods = {
    "query": ["query"],
    "create": ["type", "records", "options"],
    "delete": ["type", "ids", "options"],
    "deleted": ["type", "start", "end"],
    "describe": ["type"],
    "queryAll": ["soql"],
    "queryMore": ["locator"],
    "recent": ["type", "limit"],
    "retrieve": ["type", "ids", "options"],
    "search": ["sosl"],
    "update": ["type", "records", "options"],
    "upsert": ["type", "records", "extIdField", "options"],
    "identity": [],
    "describeGlobal": [],
    "updated": ["type", "start", "end"]
};


var m = {};
for(var methodName in methods) {
    var attrs = methods[methodName];
    m[methodName] = salesforceCallGenerator(methodName, attrs);
}


module.exports = m;
