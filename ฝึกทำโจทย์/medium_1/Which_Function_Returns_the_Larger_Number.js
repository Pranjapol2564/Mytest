function whichIsLarger(f,g){
    if(f() > g()){
        return "f";
    }
    else if(g() > f()){
        return "g";
    }
    else{
        return "neither";
    }
}




console.log(whichIsLarger(() => 5,() => 10));
console.log(whichIsLarger(() => 25,() => 25));
console.log(whichIsLarger(() => 505050,() => 5050));