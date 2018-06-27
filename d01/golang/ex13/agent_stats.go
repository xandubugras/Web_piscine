package main

import (
	"fmt"
	"os"
	"bufio"
	"strings"
	"strconv"
	"sort"
)

type Saiyan struct {
	name string
	grade_sum float64
	count float64
	avg float64
	moulinette float64
}

func add_saiyan(strs []string, m map[string]*Saiyan) {
	if (len(strs) < 0) {
		return
	}
	tmp, err := strconv.ParseFloat(strs[1], 64)
	if err != nil {
		return
	}
	if m[strs[0]] == nil {
		sai := &Saiyan {
			name: strs[0],
			grade_sum: 0,
			count: 0,
			moulinette: 0,
		}
		m[strs[0]] = sai
	}
	if strs[2] == "moulinette" {
		m[strs[0]].moulinette = tmp
	} else {
		m[strs[0]].grade_sum += tmp
		m[strs[0]].count++
		m[strs[0]].avg = m[strs[0]].grade_sum / m[strs[0]].count
	}
}

func moulinette_variance() {
	var err error
	var str string
	lookup := make(map[string]*Saiyan)
	rd := bufio.NewReader(os.Stdin)
	for err == nil {
		str, err = rd.ReadString('\n')
		strs := strings.Split(str, ";")
		if (len(strs) != 4) {
			break
		}
		add_saiyan(strs, lookup)
	}
	var keys []float64
	for k := range lookup {
		if lookup[k].moulinette != 0 {
			keys = append(keys, lookup[k].avg - lookup[k].moulinette)
		}
	}
	l := len(keys)
	var i float64
	var sum float64
	for int(i) < l {
		sum += keys[int(i)]
		i++;
	}
	fmt.Printf("%f\n", sum / i)
}

func average_user() {
	var err error
	var str string
	lookup := make(map[string]*Saiyan)
	rd := bufio.NewReader(os.Stdin)
	for err == nil {
		str, err = rd.ReadString('\n')
		strs := strings.Split(str, ";")
		if (len(strs) != 4) {
			break
		}
		add_saiyan(strs, lookup)
	}
	var keys []string
	for k := range lookup {
		keys = append(keys, lookup[k].name)
	}
	sort.Strings(keys)
	l := len(keys)
	i := 0
	for i < l {
		if lookup[keys[i]].count > 0 {
			fmt.Printf("%s: %f\n", keys[i], lookup[keys[i]].avg)
		}
		i++;
	}
}

func average() {
	var err error
	var str string
	var i float64
	var max float64
	var tmp float64
	rd := bufio.NewReader(os.Stdin)
	for err == nil {
		str, err = rd.ReadString('\n')
		strs := strings.Split(str, ";")
		if (len(strs) != 4) {
			break
		}
		tmp, _ = strconv.ParseFloat(strs[1], 64)
		if (strs[3] != "Moulinette") {
			max += tmp
			i++
		}
	}
	if i > 0 {
		fmt.Printf("%.3f\n", max / i)
	}
}

func main() {
	if (len(os.Args) < 2) {
		return
	}
	if (os.Args[1] == "average"){
		average()
	} else if (os.Args[1] == "average_user"){
		average_user()
	} else if (os.Args[1] == "moulinette_variance"){
		moulinette_variance()
	}
}
