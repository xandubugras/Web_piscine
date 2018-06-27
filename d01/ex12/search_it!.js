if (process.argv.length <= 2)
	return ;
var arg = process.argv;
var i = 2;
var arr = new Array();
var remember = new String();
while (i < arg.length)
{
	var splt = arg[i].split(':');
	arr[splt[0]] = splt.length > 1 ? splt[1] : 0;
	if (i == 2)
		remember = splt[0];
	i++;
}

if (arr[remember] != 0)
	console.log(arr[remember]);
