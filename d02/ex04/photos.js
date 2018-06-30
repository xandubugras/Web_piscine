var http = require('http');
var request = require('request');


var fs = require('fs');

function str_after (str, exp)
{
	var i = str.search(exp);
	var len = i >= 0 ? exp.length : 0;
	return i + len;
}

function get_url (link)
{
	src = link.substring(0, link.search(">"));
	src = src.substring(str_after(src, "src=\""));
	src = src.substring(0, src.search("\""));
	console.log("url: " + src);
	return src;
}

function change_value (link) {
	var value = link.substring(link.search(">") + 1, link.search("<"));
	value = link.replace(value, value.toUpperCase());
	return value;
}

function remove_http (str) {
	var host = str.substring(str_after(str, "://"))
	if (str[0] != '/')
	{
		var splt = host.split("/");
		host = splt[0].replace(/\/$/, "");
	}
	return host;
}

function get_path(url){
	var path = url.substring(str_after(url, "://"));
	path = path.substring(path.search("/"));
	return path;

}

function short_path (str, host) {
	return remove_http(host) + str;
}

function get_last (url, str)
{
	var splt = url.split(str);
	return (splt[splt.length - 1]);
}

function write_img (url, path) {
	var name = get_last(url, "/");

	var options = {
		host: remove_http(url),
		path: path,
		port: 80,
	};
	console.log("\nwriteImg:");
	console.log(name);
	console.log(options.host);
	console.log(options.path + "\n");
	var req = http.get(options, function(res) {
	  res.setEncoding('utf8');
		console.log(res.statusCode);
		 res.on('data', function (chunk) {
			var Readable = require('stream').Readable;
			var s = new Readable();
			s._read = function noop() {}; // redundant? see update below
			s.push(String(chunk));
			s.push(null);
			var writeStream = fs.createWriteStream(name);
			s.pipe(writeStream);
		});
	});
}

function find_img (err, content) {
	if (err)
		throw (err);
	content = String(content);
	var curr = content;
	while (1)
	{
		var start = curr.search("<img");
		if (start < 0)
			break ;
		var link = curr.substring(start);
		link = get_url(link);
		var path = get_path(link);
		link = remove_http(link);
		if (link[0] == '/')
			link = short_path(link, options.host)
		console.log("here3: " + link);
		console.log("here4: " + path);
		write_img(link, path);
		
		
		curr = curr.substring(start + 1);
	}
	//console.log(content);
}


var options = {
	host: remove_http(process.argv[2]),
	path: get_path(process.argv[2]),
	port: 80,
};
console.log(options.host);
console.log(options.path);


var req = http.get(options, function(res) {
  res.setEncoding('utf8');
	console.log(res.statusCode);
	 res.on('data', function (chunk) {
		 find_img(0, chunk);
	});
});

// write data to request body
