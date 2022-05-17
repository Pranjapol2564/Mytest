function concat(...n){
    var arr = [];
    const array = arr.concat(...n);// concat คือ การรวม array ที่ส่งเข้ามา
    return array;


}


console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1], [2], [3], [4], [5], [6], [7]))
console.log(concat([1, 2], [3, 4]))
console.log(concat([4, 4, 4, 4, 4]))