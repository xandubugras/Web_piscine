if (process.argv.length != 5) {
	console.log("Incorrect Parameters");
	return ;
}
var arg = process.argv;

var n1 = Number(arg[2]);
var op = arg[3];
var n2 = Number(arg[4]);
if (isNaN(n1) || isNaN(n2)) {
	console.log("Incorrect Parameters");
	return ;
}

if (op == '+')
	console.log(n1 + n2);
else if (op == '-')
	console.log(n1 - n2);
else if (op == '*')
	console.log(n1 * n2);
else if (op == '/')
	console.log(n1 / n2);
else if (op == '%')
	console.log(n1 % n2);
else {
	console.log("Incorrect Parameters");
	return ;
}
