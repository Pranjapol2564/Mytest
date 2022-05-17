toArray = (obj) => Object.entries(obj); // ตรง obj เป็น arrow function ไม่ต้องมีวงเล็บก็ได้

console.log(toArray({a : 1, b : 2}))