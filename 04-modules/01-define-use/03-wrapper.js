// function (exports, module, require, __filename, __dirname) {

// There is a wrapper function, wrapping this module (file)
    
    /**
     * let g = 1 
     * 
     * Becouse we are in node, and this file, is a module, there is a wrapper function wrapping 
     * this file. Thas why g, is in a function scope, and will not be global.
     */

    console.log(arguments);

    exports.a = 10;
    module.exports.b = 20;
    /**
     * Becouse module.exports are returned, a and b, will be available 
     * on the API of this module
     */

    //exports = () => {} Not ok, exports will stop pointing to module.exports

    module.exports = () => {}
    /**
     * This the correct way to exports the module as a function
     */

    // return module.exports;

// }

