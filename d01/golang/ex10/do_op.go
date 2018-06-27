package main

import (
	"fmt"
	"strings"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) < 4 {
		return
	}
	n1, _ := strconv.Atoi(strings.TrimSpace(os.Args[1]));
	op := strings.TrimSpace(os.Args[2]);
	n2, _ := strconv.Atoi(strings.TrimSpace(os.Args[3]));
	if op == "+" {
		fmt.Printf("%d\n", n1 + n2)
	} else if op == "-" {
		fmt.Printf("%d\n", n1 - n2)
	} else if op == "*" {
		fmt.Printf("%d\n", n1 * n2)
	} else if op == "/" {
		fmt.Printf("%d\n", n1 / n2)
	} else if op == "%" {
		fmt.Printf("%d\n", n1 % n2)
	}
}
