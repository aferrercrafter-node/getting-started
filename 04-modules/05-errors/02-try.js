const path = require('path');
const fs = require('fs');

const files = ['file','unenxisting_file', 'file'];

files.forEach(file => {
    try{
        const filePath = path.resolve(process.env.HOME, file);
        const data = fs.readFileSync(filePath);
        console.log('File data is ', data);
    }
    catch(err){
        /**
         * console.log('File not found');
         * 
         * Because we are cathing any kind of error, 
         * there is no certain of the couse of the error. 
         * Even if is a kind of error, that should stop the application
         */

        console.log('Something went wrong, and we are goint to ignore it');
    }    
});