function binary(num) {
    if (num == 0){
        var result = num.toString();
        return result;
    }
    else{
        var result = num.toString(2);
        return result;
    }
}


console.log(binary(0))
console.log(binary(1))
console.log(binary(5))
console.log(binary(10))