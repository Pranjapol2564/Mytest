function keysAndValues(obj){


    // let arr1 = [];
    // let arr2 = [];

    // for(let key in obj){
    //     arr1.push(key);
    //     arr2.push(obj[key]);
    // }

    // return [arr1,arr2];

    const arrs = [Object.keys(obj), Object.values(obj)];
    return JSON.stringify(arrs);




}


console.log(keysAndValues({ a: 1, b: 2, c: 3 }))