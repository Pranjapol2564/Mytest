function oddishOrEvenish(n){
    let str = n.toString().split(''),
        sum = 0;

    for(let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    if(sum % 2 === 0){
        return "Evenish";
    }
    else{
        return "Oddish";
    }

}



console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))