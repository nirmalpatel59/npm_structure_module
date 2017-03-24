#!/usr/bin/env node
var program = require('commander');
program
    .command('hello <name>')
    .description('Say hello to <name>')
    .action(function (name, command) {
        console.log('Hello ' + name);
    });
program
    .command('hello <name>')
    .description('Say hello to <name>')
    .action(function (name, command) {
        console.log('Hello ' + name);
    });

program.parse(process.argv);