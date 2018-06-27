package main

import (
	"fmt"
	"os"
	"strings"
	"strconv"
)

func check_op(a rune) bool {
	return (a == '/' || a == '%' || a == '*' || a == '+' || a == '-' || a == ' ' || a == '\t' || a == '\n')
}

func check_num(a rune) bool {
	return !(a == '/' || a == '%' || a == '*' || a == '+' || a == '-')
}

func main() {
	if (len(os.Args) < 2) {
		return
	}
	strs := strings.FieldsFunc(os.Args[1], check_op)
	if len(strs) < 2{
		return
	}
	n1, err := strconv.Atoi(strings.TrimSpace(strs[0]))
	if err != nil {
		return
	}
	n2, err := strconv.Atoi(strings.TrimSpace(strs[1]))
	if err != nil {
		return
	}
	op := strings.FieldsFunc(os.Args[1], check_num)
	if op[0] == "+" {
		fmt.Printf("%d\n", n1 + n2)
	} else if op[0] == "-" {
		fmt.Printf("%d\n", n1 - n2)
	} else if op[0] == "*" {
		fmt.Printf("%d\n", n1 * n2)
	} else if op[0] == "/" {
		fmt.Printf("%d\n", n1 / n2)
	} else if op[0] == "%" {
	fmt.Printf("%d %d %s\n", n1, n2, op)
		fmt.Printf("%d\n", n1 % n2)
	}
}
