function perimeter(l,num){
    var square = 4*num;
    var circle = 6.28 * num;
    return (l == "s") ? square : circle
}


console.log(perimeter("s", 7))
console.log(perimeter("c", 4))
console.log(perimeter("c", 9))