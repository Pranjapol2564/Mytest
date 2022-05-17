function sortIt(arr){
    var sorted = arr.sort(function(a,b){
        return a - b;
    });
    return JSON.stringify(sorted);

    // for(i=0; i < arr.length; i++){
    //     arr.sort((a,b) =>a-b);
    //     arr.sort((a,b) =>typeof(a) == "object"? a.sort((c,d)=>c-d):a-b);
    // }
    // return JSON.stringify(arr);
    
}





console.log(sortIt([4, 1, 3]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))