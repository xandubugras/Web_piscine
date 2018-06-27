var http = require('http');


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
	return src;
}

function change_value (link) {
	var value = link.substring(link.search(">") + 1, link.search("<"));
	value = link.replace(value, value.toUpperCase());
	return value;
}

function remove_http (str) {
	var host = str.substring(str_after(str, "://"))
	var splt = str.split("/");
	host = splt[0].replace(/\/$/, "");
	return host;
}

function get_path(url){
	console.log("here0: " + url + ".");
	var path = url.substring(str_after(url, "://"));
	console.log("here1: " + path + ".");
	path = path.substring(str_after(path, "/"));
	console.log("here2: " + path + ".");
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

function write_img (url) {
	var name = get_last(url, "/");
	console.log(name);

	var options = {
		host: remove_http(url),
		path: get_path(url),
		port: 80,
	};
	var req = http.get(options, function(res) {
	  res.setEncoding('utf8');
		 res.on('data', function (chunk) {
			 console.log(chunk);
			 //	fs.writeFile(name, chunk, 0);
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
		link = remove_http(get_url(link));
		if (link[0] == '/')
			link = short_path(link, options.host)
		console.log(link);
		write_img(link);
		
		
		curr = curr.substring(start + 1);
	}
	//console.log(content);
}


var options = {
	host: remove_http(process.argv[2]),
	path: get_path(process.argv[2]),
	port: 80,
};
console.log(options.host + " " + options.path)

var req = http.get(options, function(res) {
  res.setEncoding('utf8');
	 res.on('data', function (chunk) {
		 find_img(0, chunk);
	});
});

// write data to request body
