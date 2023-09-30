'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'), // For Each работает только с этим селектором
      oneHeart = document.querySelector('.heart');
      //если уже есть родитель например wrapper, то я могу сказать что прямо внутри блока wrapper необходимо получить определенные элементы:
      /* hearts = wrapper.querySelectorAll('.heart'),  */ //это значит, что в эти эти переменные(харст) пойдут только те элементы,
      //которые подойдут по определенному селектору('.heart') и находятся только внутри wrapper
      //таким образом мы чётко говорим внутри чего мы ищем

console.dir(box);

//что бы поменять свойства "бокс" обращаемся:
box.style.backgroundColor = 'blue';
box.style.width = '500px'; //если хотим поменять например ширину, то во-первых в формате строки пишем, а во вторых пишем измерение (пиксели), потому что css 
//не знает что такое просто 500

box.style.cssText = 'background-color: blue; width: 500px'; //можно записать тоже самое, только в одну строку несколько свойств
//так же можно в этот стиль вставлять переменные, например какой-то там "нам"
/* box.style.cssText = `background-color: blue; width: ${num}px` */

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//несколько способов если мы хотим произвести одни и те же действия над несколькими элементами:

/* for (let i = 0; i < hearts.length; i++) { //hearts.length - это до тех пор, пока сердца не закончатся
    hearts[i].style.backgroundColor = 'blue';
} */ //циклы практически не будем использовать

hearts.forEach(item => { //For Each работает ТОЛЬКО С querySelectorAllздесь только один аргумент указываем. В кол бэке, который передаётся в "фор ич" второй аргумент означает номер по порядку
    //а третий имеет ссылку на тот массив, который мы перебираем
    item.style.backgroundColor = 'blue'
});


//основным методы для работы с элементами на странице

const div = document.createElement('div'); //элемент создан и он существует ТОЛЬКО ВНУТРИ ЯВАСКРИПТА!!!
const text = document.createTextNode('Tyt bul ya'); //Этот метод используется очень редко

/* div.classList.add('black'); */
//что бы добавить наш "див" в конце страницы
/* document.body.append(div); */ //объяснение: берём наш родительский тэг "бади" и в него добавляем наш "див"

/* div.classList.add('black');
wrapper.append(div) */ // если мы хотим именно во "врапер добавить"

/* div.classList.add('black');
document.querySelector('.wrapper').append(div); //второй вариант */

/* div.classList.add('black');
wrapper.prepend(div); //Это если мы хотим вставить именно вначало */

//Так же есть "бифор" и "афтер"
/* div.classList.add('black');
hearts[0].before(div); */ //вставляет ПЕРЕД 1

/* div.classList.add('black');
hearts[0].after(div); // вставляет после 1 */


//если хотим удалить - remove
/* circles[0].remove(); */


//что бы заменить один э-т другим replace with
/* hearts[0].replaceWith(circles[0]); */ //заменяем сердце на кружок



//УСТАРЕВШИЕ методы
/* div.classList.add('black');
wrapper.appendChild(div); */

//ранее вместо "припенд, бифор, афтер" использовался метод insert before
/* div.classList.add('black');
wrapper.insertBefore(div, hearts[1]); */ //вначале что вставляем указіваем, потом перед чем

//вместо "ремув" был "ремувчайлд"
/* div.classList.add('black');
wrapper.removeChild(hearts[1]); */

/* div.classList.add('black');
wrapper.replaceChild(circles[0], hearts[0]); */


//что бы добавлять текств или что-то
/* div.classList.add('black');
wrapper.append(div)
div.innerHTML = "<h1>Hello World</h1>";  *///сюда можно втсавлять не только текст, но и ХТМЛ структуру (н1 и тд)

//второй вариант
/* div.classList.add('black');
wrapper.append(div)
div.textContent = "Hello"; //этот метод работает только с текстом */


//Что бы вставить кусочек ХТМЛ кода перед или после определенных тэгов:
div.classList.add('black');
wrapper.append(div)
div.innerHTML = "<h1>Hello World</h1>";
/* div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>'); */ //вставляем хтмл код перед нашим элементов
/* div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>'); //афтербегин вставляет вначало нашего элемента */
/* div.insertAdjacentHTML('beforeend','<h2>Hello</h2>'); *///если хотим вставить ХТМЛ код в конец нашего элемента
/* div.insertAdjacentHTML('afterend','<h2>Hello</h2>'); *///если хотим вставить после элемента