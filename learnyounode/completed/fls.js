var my = require('./mymodule.js');

if (process.argv.length != 4)
	process.exit();
var filter = process.argv[3];
var dir = process.argv[2];

my(dir, filter, function (err, data) {
	data.forEach(function (file){
	console.log(file);});
});

