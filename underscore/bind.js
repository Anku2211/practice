const _ = require("underscore")
var func = function(greeting){ 
  console.log( greeting + ': ' + this.name )
};
func = _.bind(func, {name: 'moe'}, );
func("hello");