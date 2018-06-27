function ft_is_sort (arr){
	var i = 0;

	while (i < arr.length - 1) {
		if (arr[i] > arr[i + 1]){
			return (0);
		}
		i++
	}
	return (1)
}
