'use strict';

/* const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'); */

/* btn.onclick = function() { //Этот код практически не используется
    alert('Click');
}; */

/* btn.onclick = function() { //Минус его в том, что если делаем несколько раз такое, то будет только вторая функция выполняться, просто клик не будет, сразу
    //"секонд клик"
    alert('Second Click');
}; */



/* btn.addEventListener('click', () => {
    alert('Click');
}); //первым аргументом передаём название события, второй аргумент - кол бэк функция, которая будет нашим обработчиком
// такие функции выполняются строго по порядку, сначала "клик", затем фукнция в нашем случае алерт("Клик")

btn.addEventListener('click', () => {
    alert('Second Click');
}); */
//В коде выше не потеряются "клики", будут все выполняться

/* btn.addEventListener('mouseenter', () => {
    console.log('Hover');
}); */

//если нам нужно получать данные о элементе, с которым мы взаимодействуем, например что за событие сейчас произошло, что за элемент используется, координатыитд:
//этот объект события передаётся как аргумент в кол бэк функцию. Если в кол бєк функцию нужно ещё какие-то аргументы(текстовы данные, просто данные и тд)
//передаём их через запятую, пример: btn.addEventListener('mouseenter', (e, ТУТ) => {
/* btn.addEventListener('mouseenter', (e) => {
    console.log(e);
});
 */
/* btn.addEventListener('mouseenter', (e) => {
    console.log(e.target); //получаем доступ к этому элементу, мы можем с ним что-то сделать: перекрасить, поменять класс, удалить и тд
    e.target.remove();
});
 */

//с кликом работает так же:
/* btn.addEventListener('click', (e) => {
    console.log(e.target); 
    e.target.remove();
}); */


//если нужно удалять обработчики события с некоторых элементов
/* let i = 0
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if(i == 1){
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement); */ //1 раз нажимаем, выводится в консоль, 2 и далее ничего не происходит



//сплытие событий: (сначала на вложенном, потом вверх срабатывает функция)
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

};

/* btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); */ //в консоль получаем 2 результата работы функции, сначала сработала на том элементе, который идёт ВЛОЖЕННЕЕ
//после по ирархии вверх

//чтобы отменить стандартное поведение в браузере, например выделение текста при зажатой кнопке, переход по ссылке и тд:
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

// если стоит задача навесить один функционал(ОБРАБОТЧИК СОБЫЙТИЙ) на несколько элементов: нужно перебрать все элементы псевдомассива, например на кнопку"бтн"
/* const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
}) */



//Опции, например использовать ОДИН РАЗ: {once: true}
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
})

