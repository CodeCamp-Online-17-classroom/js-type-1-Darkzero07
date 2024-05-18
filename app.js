// - จากโค้ดด้านล่างให้เขียนคำสั่งเพื่อแปลง a, b และ c ให้เป็น String แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
// - ให้ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f 
// - ผลลัพธ์ที่ได้เป็นอะไรบ้าง และเพราะอะไร


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

