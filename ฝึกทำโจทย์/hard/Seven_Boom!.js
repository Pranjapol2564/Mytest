function sevenBoom(arr){
    // let text = arr.join();
    // let s = text.split(""); 
    // for(var i = 0; i < s.length; i++){
    //     if(s[i] == 7){
    //         return"Boom!";
    //         break;
    //     }     
    // }
    // return "there is no 7 in the array";


    let result = 'there is no 7 in the array';
    for(let i = 0; i < arr.length; i++){
        const arrayItemString = String(arr[i]);
        if(arrayItemString.includes('7')){
            result = 'Boom!';
            break;
        }
    }
    return result;
}





console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))