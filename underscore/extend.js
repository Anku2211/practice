const _ = require("underscore")

let dest = {name: 'john', gender:{gender: "female"}}
let source = {age: 50, gender:{gender: "male"}}

_.extend(dest, source);
console.log(dest)
