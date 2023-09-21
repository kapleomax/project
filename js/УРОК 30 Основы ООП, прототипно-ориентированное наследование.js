'use strict';

let str = "some";
let strObj = new String(str);

/* console.log(typeof(str));
console.log(typeof(strObj)); */  //оборачивает строку в объект, потом снова превращается в премитив

console.dir([1,2,3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); // создаем новый объект джон, который будет прототипно наследоваться от солдата


/* const john = {
    health: 100
}; */

// устанавливаем связь, что бы Джон умел всё как солдат, что бы были все свойства, но некоторые были модифицированы
// в зависимости от специфики, например здоровье
// устаревший формат:

//john.__proto__ = soldier; // --- устаревший формат

//console.log(john.armor);

Object.setPrototypeOf(john, soldier); //  --- современный способ 

john.sayHello();

// ЧЕРЕЗ __ПРОТО__ УЖЕ НЕ ДЕЛАЮТ, СТАРЬЁ, ЗАПОМНИТЬ ОТСЮДА ОБДЖЕКТ КРИЕЙТ И СЕТ ПРОТОТАЙПОФ

