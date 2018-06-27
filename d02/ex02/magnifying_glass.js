if (process.argv.length <= 2)
	return ;

var fs = require('fs');

function change_title (link)
{
	var title = link.substring(link.search("title=\"") + "title=\"".length);
	title = title.substring(0, title.search("\">"));
	title = link.replace(title, title.toUpperCase());
	return title;
}

function change_value (link) {
	var value = link.substring(link.search(">") + 1, link.search("<"));
	value = link.replace(value, value.toUpperCase());
	return value;
}


function find_link (err, content) {
	if (err)
		throw (err);
	content = String(content);
	var curr = content;
	while (1)
	{
		var start = curr.search(/(<a|<img)/);
		var end = curr.search(/\/a>|\/img>/);
		if (start < 0 || end < 0)
			break ;
		var link = curr.substring(start + 2, end + 3);
		content = content.replace(link, change_value(change_title(link)));
		curr = curr.substring(end + 1);
	}
	console.log(content);

	
}

fs.readFile(process.argv[2], find_link);
