function bitwiseAND(n1, n2) {
	var bit = n1 & n2;
    return bit;
}

function bitwiseOR(n1, n2) {
    var bit = n1 | n2;
    return bit;	
}

function bitwiseXOR(n1, n2) {
    var bit = n1 ^ n2;
    return bit;	
}

console.log(bitwiseAND(7, 12)) ;

console.log(bitwiseOR(7, 12)) ;

console.log(bitwiseXOR(7, 12)) ;