package main

import (
	"fmt"
	"strings"
)

func ft_split(cr string, str string) []string {
	return strings.Split(str, cr)
}

func main() {
	s := ft_split(" ", "oi como vai");
	fmt.Print(s[0])

}
