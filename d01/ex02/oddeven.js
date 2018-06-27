var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function odd_even (x) {
	if (x % 2 == 0)
		return 1;
	else
		return 0;
}
if (process.argv.length < 3)
	return ;

process.stdout.write("Enter a number: ")
rl.on('line', (line) => {
	var num = Number(line);
	if (isNaN(num) || line.length == 0)
		console.log(line + " is not a number")
	else if (odd_even(num) == 1)
		console.log("the number " + line + " is even");
	else
		console.log("the number " + line + " is odd");
	process.stdout.write("Enter a number: ")
});
