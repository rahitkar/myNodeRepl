const repl = require('repl');
const util = require('util');

const state = {};

util.inspect.styles.undefined = "red";
util.inspect.styles.null = "red";

const myRepl = repl.start("@rahit> ");

Object.assign(myRepl.context, state);