function num_of_digits(num){
    // Ex1
    // var count = 0;

    // if(num == 0){
    //     return 1;
    // }

    // while(num){
    //     num = Math.floor(num/10);
    //     count++;
    // }
    // return count;    

    // Ex2

    if(num < 10 && num > -10){
        return 1;
    }
    else{
        return 1 + num_of_digits(Math.floor(num/10));
    }
}



console.log(num_of_digits(1000))
console.log(num_of_digits(12))
console.log(num_of_digits(1305981031))
console.log(num_of_digits(0))