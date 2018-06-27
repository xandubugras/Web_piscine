if (process.argv.length <= 2)
	return ;

var arg = process.argv[2];

var splt = arg.split(/[\s,]+/);
var tmp = splt[0];
splt.splice(0, 1);
splt.push(tmp);
var i = 0;
while (i < splt.length)
{
	process.stdout.write(splt[i]);
	if (i != splt.length - 1)
		process.stdout.write(" ");
	else
		process.stdout.write("\n");
	i++;
}
