'use strict';

// run node watch 
// file that monitors reducers/index.js file, rebuilds the files for testing and runs tests!
var exec = require('child_process').exec;

var _require = require('ramda-x'),
    Task = _require.Task,
    compose = _require.compose;

var path = require('path');
var fs = require('fs');
console.log(path.resolve(__dirname, '../', 'reducers', 'index.js'));

var reducers = path.resolve(__dirname, '../', 'reducers', 'index.js');

// const watchFile = filepath => command =>
//     Task((_, resolve) =>
//         fs.watch(filepath, () =>
//             resolve(exec(command).stderr.pipe(process.stderr))))


var watchFile = function watchFile(filepath) {
    return function (command) {
        return Task(function (_, resolve) {
            return fs.watchFile(filepath, function (eventType, filename) {
                return resolve(exec(command).stderr.pipe(process.stderr));
            });
        });
    };
};

watchFile(reducers)('npm test').fork(console.error, function (x) {
    return console.log('\x1b[32m%s\x1b[0m', 'reducers were updated!');
});