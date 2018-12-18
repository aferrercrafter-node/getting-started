### Async patterns


 Callback pattern
  
 Any async function, comes with a callback function in it´s lats parameter, it´s always
 the last parameter of it´s host function.
 The callback function, always recibe an _error_ argument in it´s first parameter.
 The _data_ comes after that.
 is first error argument, is a standar, thats wy sometimes the cb pattern is refered as the
 __First Error Callback Pattern__

``` javascript
    function cb(err, data) {

    }
```

 The Event Loop will make this callback function executes when the operating system is ready
 with data for us. 
 If there is an error, the error argument will be an error object, if there is no error,
 it comes null

 ``` javascript
    fconst fs = require('fs');
    fs.readFile(__filename, function cb(err, data){
        console.log('File data is ', data);
    });
    console.log('TEST');
```    
 This code executes in two iterations of Event Loop.
 The first iteration, executes the read file and the console.log('test') line.
 The first iteration, just define the callback function 
 and ask for data to the operating system
 When the operating system is ready with data, the event loop will execute another iteration, 
 where now will invoke the callback function, and executes console.log(data)
 

The callback pattern is good but limited
And introduce some complexity, example, 
_we need to nest async functions that depends on another_
__The Pyramid of Doom__


Node comes with a tool that you can use to promisify any built-in asyncronous API method

``` javascript
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
``` 
 
It can be promisifyed any asyncrhonous action that's designed acording to 
__Node Idiomatic Callback Pattern__
* callback last argument
* error first argument within the callback 

Nodes come with top level API promisis in the built-in plugins

``` javascript
const readFile = require('fs').promises;

async function main() {
    const data = await readFile(__filename);
    console.log('File data is ', data);
}
```


