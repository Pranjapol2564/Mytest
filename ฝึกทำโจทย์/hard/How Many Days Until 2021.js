function dayUntil2021(date){
    let rev_date = new Date(date)
    let later_date = new Date(2021,0, 1)
    let result = (later_date - rev_date) / (1000 * 3600 * 24)
    return result
    
}


console.log(dayUntil2021("12/28/2020"));
console.log(dayUntil2021("1/1/2020"))
console.log(dayUntil2021("2/28/2020"))