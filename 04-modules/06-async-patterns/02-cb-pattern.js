const fs = require('fs');

fs.readFile(__filename, function cb(err, data){
    console.log('File data is ', data);
});

console.log('TEST');

/**
 * Callback pattern
 * 
 * Any async function, comes with a callback function in it´s lats parameter, it´s always
 * the last parameter of it´s host function
 * The Event Loop will make this callback function executes when the operating system is ready
 * with data for us.
 * The callback function, always recibe an error argument in it´s first parameter.
 * The data comes after that
 * This first error argument, is a standar, thats wy sometimes the cb pattern is refered as the
 * First error callback pattern
 * If there is an error, the error argument will be an error object, if there is no error,
 * it comes null
 * 
 * This code executes in two iterations of Event Loop.
 * The first iteration, executes the read file and the console.log('test') line.
 * The first iteration, just define the callback function 
 * and ask for data to the operating system
 * When the operating system is ready with data, the event loop will execute another iteration, 
 * where now will invoke the callback function, and executes console.log(data)
 */