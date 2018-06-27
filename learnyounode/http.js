var http = require("http");

if (process.argv.length <= 2)
	process.exit();
var the_url = process.argv[2];
function ping (url) {
	var start = new Date();

	http.get(url,  (res) => {
		res.setEncoding("utf8");
		res.on("data", (data) => {
			console.log(data);
		})
	})
}

ping(the_url);
