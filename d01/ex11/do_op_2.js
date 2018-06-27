if (process.argv.length <= 2) {
	console.log("Incorrect Parameters");
	return ;
}
var arg = process.argv[2].split(/[\+\-\*\/]+/);
var ops = process.argv[2].split(/[0-9]/);
if (arg.len < 2 || ops.len < 1) {
	console.log("Incorrect Parameters");
	return ;
}
var n1 = Number(arg[0].trim());
var op = ops[1];
var n2 = Number(arg[1].trim());
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
