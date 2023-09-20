'use strict';

function first() {
    // do smth
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

/* learnJS('JavaScript', function() {  // - это анонимная функция, можем использовать её только 1 раз
    console.log('Я прошел этот урок!');
}); */

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); // здесь круглые скобки не ставятся
