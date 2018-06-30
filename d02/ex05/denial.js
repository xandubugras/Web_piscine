var readline = require('readline')
var rl = readline.createInterface({
  input: require('fs').createReadStream(process.argv[2])
});

var arr = new Array();
var i = 0;


function count_lines (content) {
	if (i == 0) {
		i++;
		return ;
	}
	splt = content.split(";");
	if (splt.length < 3)
		return ;
	if (typeof arr[splt[0]] == "undefined") {
		var obj = {
			name: splt[0],
			grade: Number(splt[1]),
			grader: splt[2],
			count: 1,
			avg: 0,
		}
		arr[splt[0]] = obj;
	} else {
		arr[splt[0]].count++;
		arr[splt[0]].grade += Number(splt[1]);
	}
	arr[splt[0]].avg = arr[splt[0]].grade / arr[splt[0]].count;
	//console.log("user: " + arr[splt[0]].name + " " + arr[splt[0]].avg);
}

function get_avg(arr) {
	var sum = 0;
	var count = 0;

	for (k in arr) {
		console.log(k.name);
		if (k.name != "moulinette") {
			sum += k.avg;
			count++;
		}
	}
	return (sum / count);
}


if (process.argv.length <= 2)
	process.exit();
rl.on('line', count_lines);
