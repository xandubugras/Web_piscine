if (process.argv.length <= 2)
	return ;
var arg = process.argv;
var i = 2;
var arr = new Array();
while (i < arg.length)
{
	var splt = arg[i].split(/[\s,]+/);
	var j = -1;
	while (++j < splt.length)
		arr.push(splt[j]);
	i++;
}
arr.sort((a, b) => {
	return (a.toLowerCase() - b.toLowerCase());
});
i = 0;
while (i < arr.length)
{
	console.log(arr[i])
	i++;
}
