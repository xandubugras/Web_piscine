package main

import (
	"fmt"
	"os"
	"bufio"
	"strconv"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Printf("Enter a number: ")
		text, _ := reader.ReadString('\n')
		if text[0] == 27 {
			return  }
		i, err := strconv.ParseInt(strings.TrimSpace(text), 0, 64)
		if err != nil {
			fmt.Printf("%s is not a number", text)
		} else if i % 2 == 0 {
			fmt.Printf("The number %d is even\n", i)
		} else {
			fmt.Printf("The number %d is odd\n", i)}
	}
}
