function addName(obj,name,value){
    // const json = JSON.stringify(obj);//เปลี่ยนobjเป็นstring

    // return json + " " + name + " : " + value; 
    
    var newObj = {};
    for(const [key,val] of Object.entries(obj)){
        newObj[key] = val;  
    }
    newObj[name] = value;
    return newObj;

}



console.log(addName({}, "Brutus", 300))
console.log(addName({ piano: 500 }, "Brutus", 400))