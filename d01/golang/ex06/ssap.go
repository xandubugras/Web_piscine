package main

import (
	"fmt"
	"os"
	"strings"
	"sort"
)

func main() {
	l := len(os.Args)
	strs := make([]string, 0, 10)

	if l < 2  {
		return
	}
	i := 1
	for i < l {
		tmp := strings.Fields(os.Args[i])
		j := 0
		for j < len(tmp){
			strs = append(strs, tmp[j])
			j++;
		}
		i++
	}
	sort.Strings(strs)
	i = 0
	for i < len(strs) {
		fmt.Printf("%s\n", strs[i])
		i++;
	}
}
