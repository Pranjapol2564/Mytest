function getLength(...arr) {
    let a = [...arr];
    let b = a.flat(Infinity).length;
    return b;
}



console.log(getLength([1, [2, 3]]))
console.log(getLength([1, [2, [3, 4]]]))
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))
console.log(getLength([1, [2], 1, [2], 1]))