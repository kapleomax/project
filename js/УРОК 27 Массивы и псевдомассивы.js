'use strict';

const arr = [2, 13, 26, 8, 10];
arr.sort(); //по умолчанию он сортирует так: 10, 13, 2, 26, 8 вначале все единички, потом вторая цифра и тд
console.log(arr);

const arr = [2, 13, 26, 8, 10]; //благодаря функции компеир нам оно делает по порядку
arr.sort(compareNum); 
console.log(arr);

function compareNum (a, b) { 
    return a - b;
}


/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) { //- может принменять в себя 3 аргумента
    console.log(`${i}: ${item} внутри массива ${arr}`); //- здесь нельзя остановить цикл брейком или континиу
}); */

/* arr.pop(); //-удаляет последний элемент
arr.push(10); //-добавляет элемент


console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {  //-конструкция перебора данных в массиве
    console.log(arr[i]);
}
 */
/* for (let value of arr) { // второй вариант перебора (этот вариант работает только с массиво-подобными сущностями)
    console.log(value);  // преимущество этого цикла в том, что можно сюда добавлять брейк или континиу
} */

const str = prompt("", "");
const products = str.split(", "); //из строки сделал массив данных
products.sort(); // сортирует по алфавиту
console.log(products.join('; ')); //из массива сделал строку, всё записал в строку как мы указали точка запятая пробел