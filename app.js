let a = undefined;
let b = 2;
let c = a++;

let d = String(a)
console.log(d)          // "NaN" เพราะ undefined ถูกแปลงเป็น String
console.log(typeof(d))           

let e = String(b)
console.log(e)          // "2" เพราะแปลงเป็น string
console.log(typeof(e))          

let f = String(c)
console.log(f)          // "Nan" เพราะ undefined ถูกค่าแล้วแปลงเป็น String
console.log(typeof(f))          

