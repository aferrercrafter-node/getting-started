const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main() {
    const data = await readFile(__filename);
    console.log('File data is ', data);
}

main();

console.log('TEST');

/**
 * Node comes with a tool that you can use to promisify any built-in asyncronous API method
 * require('util');
 * 
 * It can be promisifyed any asyncrhonous action that's designed acording to 
 * node idiomatic callback pattern
 * - callback last argument
 * - error first argument within the callback 
 */