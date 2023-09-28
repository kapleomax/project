'use strict';

const box = document.getElementById('box'); // с помощью класса

console.log(box); 

const btns = document.getElementsByTagName('button'); //обращаемся по тэгу

console.log(btns[1]); //тут выбираем вторую кнопку с помощью тэга

const circles = document.getElementsByClassName('circle'); //обращаемся по классу
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //когда используем селекторы, сначала ставим точку
//внутрь скобок можем вставляем что хочешь: уникальный идентификатор через решетку, может быть просто класс вложеный
//вложенность классов, псевдоклассы, атрибуты, 
console.log(hearts);


hearts.forEach(item => { //метод вывода в консоль сердечек
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //так же принимает во внутрь сss селекторы как и прошлый. Позволяет получить только один элемент со страницы
console.log(oneHeart); // причем он берёт первый который попал в селектор в нашем случае '.heart'

