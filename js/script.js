"use strict";

/* Урок 14 "Условия" */

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}



const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');


const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Ne v etot raz!')
        break;
}


/* Урок 15 "Логические операторы" */

const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Ya sit');
}

console.log((hamburger && fries));


const hamburger = 3;
const fries = 1;
const cola = 1;

console.log((hamburger === 3 && cola && fries));
/* Если мы прописываем консоль.лог, то он возвращает последнее натуральное значение, в случае сверху это 1 */
console.log(1 && 0); /* 1 - это тру, а 0 - фолс, запнулся на нуле вернул 0 */
console.log(1 && 5); /* сравниваем 1 и 5, оба правда, возвращает последнее правду */
console.log(null && 5); /* нул - неправда, это "ничего" и 5, запнулся на неправде и вернул нул */
console.log(0 && 'asjdsjadjasdjsa'); /* 0 - неправда, вернул неправду - 0 */
/* оператор "И" может вернуть как "правду, так и значение */
/* Итог: оператор "И" всегда возвращает первое ложное значение, если оно есть, 2 - если все верны - код дошел до конца, то возвращается значение последнего элемента */

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Vse situ');
} else {
    console.log('Mu yxodim');
}




const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 & cola === 2 || fries === 3 && nuggets) {
    console.log('Vse situ');
} else {
    console.log('Mu yxodim');
}

/* Как только оператор или находит правду, код останавливается */

console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets));
/* тут получаем 0, последнее ложное значение */

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport)


console.log(!0);

/* ДЗ урок 15 */


/* Что выведет консоль? */
console.log(NaN || 2 || undefined); /* 2  +*/
console.log(NaN && 2 && undefined); /* NaN  +*/
console.log(1 && 2 && 3); /* 3  +*/
console.log(25 || null || !3); /* 25  +*/
console.log (NaN || null || !3 || undefined || 5); /* !3  -*/
console.log (NaN || null && !3 && undefined || 5); /* 5 */
console.log (5 === 5 && 3 > 1 || 5); /* 1  - (выведет "ТРУ"*/

/* Выполняется ли условие? */

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
/* ДА */


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
/* ДА */

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
/* нет */



/* УРОК 16  ЦИКЛЫ*/