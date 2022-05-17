function objectToArray(obj){
    let sol = [];
    // for(key of Object.keys(obj)){
    //     sol.push(key,obj[key]);
    // }
    // return sol;

    for(let key in obj){
        let val = obj[key];
        sol.push(key,val);
    }
    return sol;
}




console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
})) 