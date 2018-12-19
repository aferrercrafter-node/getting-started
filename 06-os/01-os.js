const os = require('os');

console.log('OS Platform is: ', os.platform());

console.log('OS CPU arquitecture is: ', os.arch());

console.log('# of locgical CPU cores: ', os.cpus().length);

console.log('Home directory for current user: ', os.homedir());

console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'line 3');
