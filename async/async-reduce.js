const async = require('async')

async.reduce([1,2,3,4,5], 0, function(memo, item, callback) {

    console.log(memo);
    process.nextTick(function() {
        callback(null, memo + item)
        // console.log( memo + item)
    });
}, function(err, result) {
    console.log('final',result)
    // result is now equal to the last value of memo, which is 6
});