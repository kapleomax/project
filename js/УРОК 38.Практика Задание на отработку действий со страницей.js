/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');






adv.forEach(item => { //вариант учителя стрелочная функция
    item.remove();
});

genre.textContent = "драма";

poster.style.backgroundImage = 'url("img/bg.jpg")'; 

movieList.innerHTML = ""; //если в эту структуру вставляем пустую строку, то блок просто автиматически очищается

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => { //если нам необходимо что-то перебрать, то это сразу метод ФОРИЧ, во внутрь помещаем кол бэк функцию с 2 аргументами:
  //филм(каждый отдельный фильм) и i(номер по порядку, потому что в задании 5 нужно пронумеровать)
  movieList.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
      </li>
  ` //"+= дополнительное присваивание" a = a + 1; или ТОЖЕ САМОЕ а += 1; так же можно использовать 
  //со строками а = а + "ааа"; а += "ааа";

})


/*      const       listFilms = document.querySelector('.promo__interactive-list'),
      newFilms = movieDB.movies.sort(),
films = document.querySelectorAll('.promo__interactive-item'); */
/* films.forEach(item => {
  item.remove();
});

listFilms.prepend(newFilms); */ //МОЙ ВАРИАНТ, вставлялся нормальный список, но без стилей











/* adv.forEach(function(item){ //вариант учителя просто через функцию
    item.remove();
})
 */


/* МОЙ ВАРИАНТ:
const adv = document.getElementsByClassName('promo__adv'),
      genres = document.getElementsByClassName('promo__genre'),
      genre = 'драма';
adv[0].remove();
genres[0].replaceWith(genre); */

/* genre[0].style.cssText = 'font-size: 18px; line-height: 21px; color: #FFFFFF; text-transform: uppercase'; */









