//Домашка по теме Логические операторы и динамическая типизация: что выведет в консоль? (ответы свои можно вписать комментами)

console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); //NaN
console.log(1 && 2 && 3); //3
console.log(!1 && 2 || !3); //false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5   
console.log(NaN || null && !3 && undefined || 5); //5   
console.log(5 === 5 && 3 > 1 || 5); //true

//выполняется ли условие? объясните почему именно так

/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
if (hamburger === 3 && cola || fries === 3 && nuggets) {

    console.log('Done!') 

} */

//2 выполняется ли условие? объясните почему именно так

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger || cola || fries === 3 || nuggets) {

    console.log('Done!')

}

/*3 //выполняется ли условие? объясните почему именно так

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger && cola || fries === 3 && nuggets) {

    console.log('Done!')

}
*/
 

 

// 4Преобразовать число в строку(несколько способов) (преобразуйте num в строку):
let num = 543; //d
console.log(typeof(String(num)));
console.log(typeof(num + 'D'));

// code here result = ...
let result =55;
if(typeof(result)=="string")  {
console.log('Done') } else { console.log('Try again')}

 

/*Преобразовать строку в число(несколько способов) (преобразуйте str в число):
let str = '129', result;
// code here result = ...
if(typeof(result)=="number") ) {
console.log('Done') } else { console.log('Try again')}*/