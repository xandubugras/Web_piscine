package main

import (
	"fmt"
	"os"
	"strings"
	"sort"
)

type nonSensitive []string

func (s nonSensitive) Less(a, b int) bool {
	return strings.ToLower(s[a]) < strings.ToLower(s[b])
}

func (s nonSensitive) Len() int {
	return len(s)
}

func (s nonSensitive) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}


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
	sort.Sort(nonSensitive(strs))
	i = 0
	for i < len(strs) {
		fmt.Printf("%s\n", strs[i])
		i++;
	}
}
