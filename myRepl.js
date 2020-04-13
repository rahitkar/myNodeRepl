const repl = require('repl');
const util = require('util');

const state = {};

util.inspect.styles.undefined = "red";
util.inspect.styles.null = "red";

const myRepl = repl.start(`@${process.env.USER_NAME || 'node'}> `);

Object.assign(myRepl.context, state);