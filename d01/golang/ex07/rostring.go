package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) < 2 {
		return }
	strs := strings.Fields(os.Args[1])
	i := 0
	l := len(strs)
	fmt.Printf("%s", strs[l - 1])
	if (l > 1){
		fmt.Print(" ")
	}
	for i < l - 1 {
		fmt.Printf("%s", strs[i])
		if i != l - 2 {
			fmt.Printf(" ")
		}
		i++;
	}
	fmt.Print("\n")
}
