### Modules

The difference between a simple js file, and a module in Node, is that every module (js file) is wrapped in a function, that always return something.

That function, has the parameters

``` bash
function (exports, module, require, __filename, __dirname){
    return exports.module;
}
```

_exports and module_ are the ones that define the API that this module exports.

_require_ can be used to require modules that are needed in this modules.

_filename_ has the path of this file

_dirname_ the path of the folder hosting this file

__The Event Loop__

What Node uses to process Asyncrhonous actions and interface them for you
so that you don´t have to deal with threads

Every node process, starts this infinite loop that we call Event Loop, but when the process has no asyncrhonous operations to perform, the event loop will exit, ant the operative system will terminate that node process

__Node Clusters__

You should always be running your node process, in each cpu core available in your server, if you are not running a cluster, your are not using the full power of the machine and node.
Even if your sinlge production server has a single core, you should be running a cluster anyway, because that cluster has the simple job of monitoring the actual node process and starting a new one when the process crash on and exists.

You can run node clusters with the module built-in of node, or many other tools like PM2