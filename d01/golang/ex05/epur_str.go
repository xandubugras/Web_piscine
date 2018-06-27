package main

import (
	"fmt"
	"strings"
	"os"
)

func main() {
	var i int

	if len(os.Args) < 2{
		return
	}
	epur := strings.Fields(os.Args[1])
	l := len(epur)
	for i < l {
		fmt.Printf("%s", epur[i])
		if i != l - 1 {
			fmt.Printf(" ")
		}
		i++;
	}
	fmt.Print("\n")
}
