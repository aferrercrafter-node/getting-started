### Web

__nodemon__

Node doesn´t automatically reload when you change files, you have to restart the process to 
see the changes take effect. __nodemon__ is one public tool that do that for you. For development enviroment only, you can run the process with nodemon insted of node. It´s recommended to install globally

``` bash
    # node 1-hello.js
    nodemon 1-hello.js
``` 

For see an object properties more simplified, you can use console.dir(), the first argument is the object, and the second, is an object with the property depth, that specify the top level to 
look when logging the object

``` javascript
    console.dir(obj, {depth: 0});
``` 

The __req__ _(request)_ and __res__ _(responde)_ are strams, the request is a _readableStream_, 
and the response is a _writableStream_

All streams are events emmiters that you can subscribe to them.

__Web Frameworks__

The built-in web modules that comes with node (http, https, http2) are low level.
They offers limited capabilities. for example, you dont have an API for reading, body parameters

Express.js
Koa.js
Sails.js (Rails)
Meteor.js

__Web Templates Lenaguage__

PUG
EJS
Handlebars
JSX with React
