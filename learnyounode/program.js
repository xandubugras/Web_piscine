var http = require('http');

if (process.argv.length <= 2)
	process.exit();
var the_url = process.argv[2];
function ping (url) {
	var start = new Date();

	http.get({host: url}, (res) => {
		console.log("URL: " + url);
		console.log("Response time:" + (new Date() - start));
	})
}

ping(the_url);
