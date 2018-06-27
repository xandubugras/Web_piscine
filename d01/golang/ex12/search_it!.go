package main

import (
	"os"
	"fmt"
	"strings"
)

func main() {
	if len(os.Args) < 2{
		return
	}
	i := 1
	l := len(os.Args)
	lookup := make(map[string]string)
	var k0 string
	for i < l {
		strs := strings.Split(os.Args[i], ":")
		if i == 1 {
			k0 = strs[0]
		}
		if (len(strs) > 1) {
			lookup[strs[0]] = strs[1]
		}
		i++
	}
	if (lookup[k0] != "") {
		fmt.Printf("%s\n", lookup[k0])
	}
}
