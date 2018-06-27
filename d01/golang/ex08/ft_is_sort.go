package main

import (
	"sort"
	//"fmt"
)

func ft_is_sort(arr []int) bool {
	return (sort.IntsAreSorted(arr))
}

/*func main() {
	arr := []int{1, 1, 2, 2, 3}
	fmt.Print(ft_is_sort(arr))
}*/
