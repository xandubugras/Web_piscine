package main

import (
	"fmt"
	"time"
	"os"
	"strings"
	"strconv"
)

type t struct {
	day int
	month int
	year int
	second int
	minute int
	hour int
}

func getMonth(mon string) (int) {
	if mon == "Janvier" {
		return 1
	} else if mon == "Fevrier" || mon == "fevrier" {
		return 2
	} else if mon == "Mars" || mon == "mars" {
		return 3
	} else if mon == "Avril" || mon == "avril" {
		return 4
	} else if mon == "Mai" || mon == "mai" {
		return 5
	} else if mon == "Juin" || mon == "juin" {
		return 6
	} else if mon == "Juillet" || mon == "juillet" {
		return 7
	} else if mon == "Aout" || mon == "aout" {
		return 8
	} else if mon == "Septembre" || mon == "septembre" {
		return 9
	} else if mon == "Octobre" || mon == "octobre" {
		return 10
	} else if mon == "Novembre" || mon == "novembre" {
		return 11
	} else if mon == "Decembre" || mon == "decembre" {
		return 12
	}
	return 0
}

func newT(input []string) (*t) {
	tim := new(t)
	splt := strings.Split(input[4], ":")
	if len(splt) < 3 {
		return nil
	}
	tmp, _ := strconv.Atoi(input[1])
	if tim.day = tmp ; tim.day == 0 {
		fmt.Print("Err on day\n")
		return nil
	}
	if tim.month = getMonth(input[2]); tim.month == 0 {
		fmt.Print("Err on month\n")
		return nil
	}
	tmp, _ = strconv.Atoi(input[3])
	if tim.year = tmp; tim.year == 0 {
		fmt.Print("Err on year\n")
		return nil
	}
	tmp, _ = strconv.Atoi(splt[2])
	if tim.second = tmp; tim.second == 0 {
		fmt.Print("Err on second\n")
		return nil
	}
	tmp, _ = strconv.Atoi(splt[1])
	if tim.minute = tmp; tim.minute == 0 {
		fmt.Print("Err on minute\n")
		return nil
	}
	tmp, _ = strconv.Atoi(splt[0])
	if tim.hour = tmp; tim.hour == 0 {
		fmt.Print("Err on hour\n")
		return nil
	}
	return tim
}

func main() {
	if len(os.Args) < 2 {
		return
	}
	date_strs := strings.Fields(os.Args[1])
	tim := newT(date_strs)
	if tim == nil {
		fmt.Print("Proper format: Week_day(in french eg: Mardi) day month(in french eg: Novembre) year hour:minute:second\n")
		return
	}
	now := time.Date(tim.year, time.Month(tim.month), tim.day, tim.hour, tim.minute, tim.second, 0, time.FixedZone("Beijing Time", 0))
	now_secs := now.Unix()
	fmt.Print(now_secs)
	fmt.Print("\n")
}
