function splitAndSort (str) {
	var splt = str.split(" ");
	var i = 0;
	while (i < splt.length)
	{
		if (splt[i] == "")
		{
			splt.splice(i, 1);
			i -= 1;
		}
		i++;
	}
	splt.sort();
}

if (process.argv.length < 3)
	return ;
splitAndSort(process.argv[2]);
