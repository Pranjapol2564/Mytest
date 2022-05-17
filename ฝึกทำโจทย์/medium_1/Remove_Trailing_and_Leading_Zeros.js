function removeLeadingTrailing(n){
    let num = parseFloat(n);
    return num === Math.floor(num) ? Math.floor(num).toString() : num.toString();
}


console.log(removeLeadingTrailing("230.000"))
console.log(removeLeadingTrailing("00402"))
console.log(removeLeadingTrailing("03.1400"))
console.log(removeLeadingTrailing("30"))