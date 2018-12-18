setInterval(() => {
    console.log('Hello Event Loop!');
}, 500);

/**
 * The Event Loop
 * What Node uses to process Asyncrhonous actions and interface them for you
 * so that you don´t have to deal with threads
 * 
 * Every node process starts this infinite loop that we call Event Loop, 
 * but when the process has no asyncrhonous operations to perform, 
 * the event loop will exit, ant the operating system will terminate that node process
 */