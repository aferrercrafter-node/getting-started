const path = require('path');
const fs = require('fs');

const files = ['file','unenxisting_file', 'file'];

files.forEach(file => {
    try{
        const filePath = path.resolve(process.env.HOME, file);
        const data = fs.readFileSync(filePath);        
        /**
         * const data = fs.readFileSync(filePath, 'adadasddasd');
         * this is an invaling encoding, it should stop the process, and not pass as a
         * 'File not found' error
         */
        console.log('File data is ', data);
    }
    catch(err){
        
        if(err.code === 'ENOENT') {
            console.log('File not found');
        }
        else {
            throw err;
        }        
    }    
});