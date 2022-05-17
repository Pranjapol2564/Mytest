function intWithinBounds(n,lower,upper){
    if(Number.isInteger(n)){ //check if n is an integer
        if(n > lower && n < upper){   
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}




console.log(intWithinBounds(3, 1, 9))
console.log(intWithinBounds(6, 1, 6))
console.log(intWithinBounds(4.5, 3, 8))