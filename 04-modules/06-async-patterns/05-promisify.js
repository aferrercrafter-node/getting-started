const readFile = require('fs').promises;

async function main() {
    const data = await readFile(__filename);
    console.log('File data is ', data);
}

main();

console.log('TEST');

// Nodes come with top level API promisis in the built-in plugins