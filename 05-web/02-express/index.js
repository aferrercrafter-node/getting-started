const express = require('express');

const server = express();
// usually called server or app

server.get('/', (req, res) => {
    res.send('Hello Express!');
    // Not needed to call res.end(), express does it automatically
})

server.get('/about', (req, res) => {
    res.send('About Express!');
    // Not needed to call res.end(), express does it automatically
})

server.listen(4242, () => {
    console.log('Express Server is running...');
});