const async = require('async')
const fs = require('fs')

// type one
async.parallel([
    async.apply(fs.writeFile, 'testfile1', 'test1'),
    async.apply(fs.writeFile, 'testfile2', 'test2')
]);

// type two
var fn =  async.apply(console.log, 'one');
fn('two', 'three');
