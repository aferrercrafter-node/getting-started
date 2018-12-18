const EventEmitter = require('events');

const myEmmiter = new EventEmitter();

/**
 * myEmmiter.emit('THE_EVENT');
 * With the emiiter emmiting the event here, no console will not be fired, because 
 * the subrcriptions where after the emission
 */

setImmediate(() => {
    myEmmiter.emit('THE_EVENT');
})
/**
 * With the setInmediate function, the subscriptions would be succesfully, couse event
 * would be emmited after
 */

myEmmiter.on('THE_EVENT', () => {
    console.log('THE_EVENT was fired');
});

myEmmiter.on('THE_EVENT', () => {
    console.log('THE_EVENT was fired');
});

myEmmiter.on('THE_EVENT', () => {
    console.log('THE_EVENT was fired');
});

// Streams are Events Emitters
// process.stdin, process.stdout