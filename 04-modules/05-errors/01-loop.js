const path = require('path');
const fs = require('fs');

const files = ['file','unenxisting_file', 'file'];

files.forEach(file => {
    const filePath = path.resolve(process.env.HOME, file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
});

/**
 * In the unexisting file, the process will terminate bcaouse it will throw an error, and it will
 * not reach to read the third file, that it exist
 */