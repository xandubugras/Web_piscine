

var i;
var l;
var sum;

i = 2;
if ((l = process.argv.length) <= 2)
	process.exit();
sum = 0;
while (i < l)
{
	sum += Number(process.argv[i]);
	i++;
}
console.log(sum);
