function triangle(n){
    // dot in rectangle = n(n+1) สี่เหลี่ยมผืนผ้า
    // dot in Triangular = n(n+1)/2

    // var variable = n;
    // var dot_tri = variable*(variable+1)/2;
    // return dot_tri;

    var dot = 0;
    var result = 0;
    for(var i=1; i<=n; i++){
        dot++;
        result += dot;
    }
    return result;
    
}


console.log(triangle(6));