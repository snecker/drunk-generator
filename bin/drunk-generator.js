#!/usr/bin/env node

var lib= require('../lib/index.js');

var myArgs = process.argv.slice(2);

lib.createModule(myArgs);
