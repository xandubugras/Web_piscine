var path = require('path');
var fs = require('fs')

module.exports = function (dir, filter, cb) {
	var arr = new Array();
	fs.readdir(dir, function (err, list) {
		if (err)
			return cb(err, 0);
		list.forEach(function (file) {
			if (path.extname(file) == '.' + filter)
				arr.push(file);
			})
		if (cb)
			cb(0, arr);
		return arr;
	})
}

