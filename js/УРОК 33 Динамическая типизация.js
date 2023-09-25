'use strict';

// To String (превращаем в строку)

//1: редко пользуются

console.log(typeof(String(null))); // наша команда стринг превратила "нал" в строковый тип данных
console.log(typeof(String(4))); // тут тоже самое, получаем "стринг"

// 2 конкотенация

console.log(typeof(5 + "")); // при сложении со "строкой" всегда получается строка

//primer

const num = 5;

console.log("https://vk.com/catalog/" + num);



const fontSize = 26 + 'px'; // 26 + пиксели - получится строка, которую мы уже можем поместить в стили

// to Number превращаем в число

// 1 способ

console.log(typeof(Number('4'))); // редкий способ

// 2 унарный плюс

console.log(typeof(+'5'));

// 3 

console.log(typeof(parseInt("15px", 10))); // Тоже не часто

//primer

let answ = +prompt("Hello", "");

//To boolean тру фолс

0, "", null, undefined, NaN // всегда фолс, пустая строка (если в ковычках стоит пробел, это уже НЕ ПУСТАЯ), null тоже фолс, абсолютное ничего, undef - что то но
                            // без значения

// ВСЁ ОСТАЛЬНОЕ ТРУ!!!

// 1 способ "нативный"
let switcher = null;

if (switcher) { //тут ничего не происходит, потому что свитчер = нал = фолс
    console.log('Working...');
}

switcher = 1; // тут всё работает

if (switcher) {
    console.log('Working...');
}


// 2 способ булиновый почти никогда не юзают
 
console.log(typeof(Boolean(4)));

// 3 редкий приём

console.log(typeof(!!"44444")); // 2 знака отрицания делают булиновым








