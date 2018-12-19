const http = require('http');

const requestListenner = (req, res) => {
    //req and res are streams
    console.dir(req, { depth: 0 });
    console.dir(res, { depth: 0 });

    /**
     * When you log this, you will get two req/res, thats why, when you refresh the page
     * you will get a second call because the browser is looking after favicon.ico
     */

    //res.end('Hello World \n');
    res.write('Hello World \n');
    res.end();    
    /**
     * res.end();
     * The http protocol needs an explicit signal, that communication is over
     * Is not optional!
     */
}

/**
 * const server = http.createServer(requestListenner());
 * You do not pass funcion execution, you pass the pointer to the function definition,
 * if you pass requestListenner(), you are passing the result of the function
 */

//const server = http.createServer(requestListenner);
const server = http.createServer();
server.on('request', requestListenner); // Using the Event Emmiter API 

/**
 * const server = http.createServer(requestListenner);
 * createServer() is a High Order function, it needs another function as parameter
 */

server.listen(4242, () => {
    console.log('Server is running...');    
});

/**
 * The Event Loop is infinitely listen to incoming request
 */