function addUp(n){
    var sum = 0;
    for(i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}



console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));