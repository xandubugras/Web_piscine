if (process.argv.length <= 2)
	return ;

var args = process.argv;
var i = 2;

while (i < args.length)
{
	console.log(args[i]);
	i++;
}
