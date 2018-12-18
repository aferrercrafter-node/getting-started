const fs = require('fs').promises;

async function main() {
    const data = await readFile(__filename);
    await fs.writeFile(__filename + '.copy', data);
    // more awayts here
}

main();

console.log('TEST');