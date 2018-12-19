# Node Getting-Started

__What is Node?__

- Node.js is a wrapper around a VM (V8/Chakra)
- Node pass your code to VM, VM executes it, and tell Node what the result is, and Node make the result available to you
- Node has several built-in modules providing rich features through easey-to-use asynchronous APIs (fs, http, crypto, zip, ...)
- Asynchronous APIs (no threads)
- C++ addons
- Debugger and other utilities
- Package manager (NPM)
- Module dependency manager

https://jscomplete.com/reads/why-node-for-react
https://nodejs.org/api/index.html
https://medium.freecodecamp.org/hard-coding-concepts-explained-with-simple-real-life-analogies-280635e98e37
https://edgecoders.com/asynchronous-programming-as-seen-at-starbucks-fc242cf16aa

### Callback

A function that node will "call back" at a later point in the time of a program

 ``` javascript
  function cb(){
      // do something with data
  }

  someAsyncMethod(cb)
 
 ```

 __Starbucks Example__
 
 ``` javascript

  function Samer(readyLatte){
      // drink readyLatte...
  }

  starbucks.makeMeLatte(Samer);
 ``` 

 __Promise__

 ``` javascript

const egg = chicken.makeChick(); 'It´s a promise!'
egg
    .then(chick => raiseChick()) //Success outcome
    .catch(badEgg => throw badEgg) // Fail outcome

```

NVM node version manager -> Simple batch script to manage multiple active node.js versions


### REPL Mode

Read -> Eval -> Print -> Loop

### Hotleys

_.help_ for help
_double tab_, give you a list of possible tings you can type. Work also empty
_ give you the last val used

### Timers

setTimeout
setInterval

_setTimeout_ after 0 mls, does not mean execute it right away, but rather it means execute right away after you are done with everything in this script.
_setTimeout delay_ is not a guaranteed thing. But rather a minimum thing. 

### Node's CLI 

_node -h_ print interface options of node cli

### Enviroment variables

``` bash
$ node_debug="http" node 1-hello_world.js

# Server is running
# HTTP 7960: SERVER new http connection
# HTTP 7960: SERVER new http connection
# HTTP 7960: write ret = true
# HTTP 7960: outgoing message end.
# HTTP 7960: SERVER socketOnParserExecute 435
# HTTP 7960: write ret = true
# HTTP 7960: outgoing message end.
# HTTP 7960: SERVER socketOnParserExecute 420
# HTTP 7960: server socket close

```

``` bash
val1=10 val2=20 node 9-custom-env-variables.js

export val1=100
export val2=200

node 9-custom-env-variables.js
```

_it can be used for ser dynamics values like ports for diferents enviroments_

### Positional arguments

_process.argv_

``` bash
node -p "process.argv" hello bye

# [ 'C:\\Program Files\\nodejs\\node.exe', 'hello', 'bye' ]
# node script.js [arguments]
```
### Standar input ouput streams

``` bash
node -p "process"

# ...
# stdout -> output
# stderr -> error
# stdinn -> input

# These control the communication channel between the Node process and its operation system execution enviroment

```
_(node cli)_

``` javascript
process.stdout.write('hello\n');

/** 
 * hello
 * true
 */

``` 

### Debugger

Node comes with a built-in debugger utility, but is very limited.
The cool thing about Node  debugger, is that is beautifully integrated with __Chrome Dev Tools__

``` bash
    node --inspect-brk 04-bug.js
``` 

Go to crhome and open a new tab in chrome://inspect/#devices nad
click on the inspect link on your node process

