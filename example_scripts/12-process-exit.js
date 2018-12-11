setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
    console.log('Process will exit now. See you later!');
});

console.log('Hello!');

/**
 * The 
 * console.log('Hello!')
 * line will execute thanks to the power of Node asynchronous nature and it's event-base methodology
 */