const async = require('async')

async.waterfall([
    function getName(callback){
        // console.log('Ankita')
        callback(null, 'Ankita Yadav')
    },
    function getEmail(arg1,callback){
        // console.log('ankita@plantyouridea.com')
        console.log(arg1)
        callback(null, 'ankita@plantyouridea.com' )
    },
    function getContact(arg1, callback){
        console.log(arg1)
        callback(null,8223829454)
    },
    function done(arg1, callback){
        console.log(arg1)
        callback(null, 'Details Completed')
    }
], function(err,result){
    console.log(result)
})