'use strict';

module.exports.core = {
    inputOutput: inputOutput,
    transformFile: transformFile,
    transform: transform,
    httpClient: httpClient,
    httpServer: httpServer,
    printHelpMessage: printHelpMessage
};


// inside streams.js
function inputOutput(filePath) {
    console.log('Implement me !');
}
function transformFile(filePath) {
    console.log('Implement me !');
}
function transform() {
    console.log('Implement me !');
}
function httpClient() {
    console.log('Implement me !');
}
function httpServer() {
    console.log('Implement me !');
}
function printHelpMessage() {
    console.log('Implement me !');
}
function start() {
    console.log('streams.js executed as standalone !!!');
}

/** * **** CODE TO READ COMMAND LINE GOES HERE ******/
if (process.mainModule.filename.includes('streams.js')) {
    start();
} else {
    console.log('streams.js used as module with exported API through index.js');
}