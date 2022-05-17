function numInStr(arr){
    let newArr = []

    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            if(arr[i][j] >= '0' && arr[i][j] <= '9'){
                newArr.push(arr[i]);
                break;
            }
        }
    }
    return newArr;
}


console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr(["this is a test", "test1"]))