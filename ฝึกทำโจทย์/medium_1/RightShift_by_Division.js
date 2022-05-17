function shiftToRight(x, n) {
    var cal = Math.pow(2, n);
    var cal2 = x / cal;
    var result = Math.floor(cal2);
    
    return result;
}



console.log(shiftToRight(80, 3));