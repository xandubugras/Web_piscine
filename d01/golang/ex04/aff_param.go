package main

import (
	"fmt"
	"os"
)

func main() {
	i := 1
	l := len(os.Args)

	for i < l {
		fmt.Printf("%s\n", os.Args[i])
		i++;
	}
}
