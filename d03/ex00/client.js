var http = require('http');

var options = {
	host: "localhost",
	port: 3000,
}

var req = http.get(options, function(res) {
  res.setEncoding('utf8');
	console.log(res.statusCode);
	 res.on('data', function (chunk) {
		 console.log(chunk);
	});
});
