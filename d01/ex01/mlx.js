function thousand_display (x) {
	if (x.length == 0)
		return ;
	var i = 1000 / x.length;
	while (i > 0) {
		process.stdout.write(x);
		i--;
	}
	console.log("");
}

thousand_display("XXXXX");
