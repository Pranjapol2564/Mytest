function rightRotations(str){
    var result = [];
    for(var i = str.length; i > 0; i--){
        result.push(str.slice(i) + str.slice(0, i));
    }
    return result;
}




console.log(rightRotations("abc"));