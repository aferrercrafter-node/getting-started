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