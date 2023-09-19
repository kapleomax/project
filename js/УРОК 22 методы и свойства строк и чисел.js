'use strict';

const str = "test";
const arr = [1, 2, 4];

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);


const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));


const logg = "Hello world!";

console.log(logg.slice(6, 11)); /* - если указать только один аргумент (например в нашем случае 6), то строка будет вырезаться до конца */
console.log(logg.slice(-5, -1)); /* - если справа налево считать */
console.log(logg.substring(6, 11)); /*  - тоже самое что и слайс. Разница только в том что нельзя отрицательные числа писать. Если написать -5, то будет считаться как 0 */
console.log(logg.substr(6, 2)); /* - первое числа с какого символа начинаем вырезать, второе число - сколько символов хотим вырезать */


const num = 12.2;

console.log(Math.round(num));


const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));
