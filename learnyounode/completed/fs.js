function count_lines (err, content) {
	if (err)
		throw(err);
	var i = 0;
	var lines = 0;
	while (content[i])
	{
		if (Number(content[i]) == 10)
			lines++;
		i++;
	}
	console.log(lines);
}

var fs = require('fs')

if (process.argv.length <= 2)
	process.exit();
fs.readFile(process.argv[2], count_lines);
