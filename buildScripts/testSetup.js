//this file is not transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')()

// Disable webpack features that mocha doesnt understand.
require.extensions['.css'] = function() {}

