const fs = require('fs');

fs.readFile(__filename, function cb(err, data){
    fs.writeFile(__filename + 'copy', data, function cb2(err) {
        // Nest more callbacks here
    });
    console.log('File data is ', data);
});

console.log('TEST');

/**
 * The callback pattern is good but limited
 * And introduce some complexity, example, 
 * we need to nest async functions that depends on another
 * The Pyramid of Doom
 */