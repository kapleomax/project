'use strict';

/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj; // здесь передает не структуру, а именно ссылку на объект, поэтому когда а переприсваиваем, 

copy.a = 10; // она меняется везде, а не так как в примере сверху

console.log(copy);
console.log(obj);
 */


//ЗДЕСЬ МЫ ДЕЛАЕМ КОПИЮ "ПОВЕРХНОСТНУЮ", а не ссылку: (1-й способо)

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //это поверхностная копия, поэтому если мы меняем объект в объекте, то он поменяется и в копии, и в нашем основном

/* console.log(newNumbers);
console.log(numbers); */


//второй

const add = {
    d: 17,
    e: 20
};

/* console.log(Object.assign(numbers, add)); */ //добавляем к объекту через ассайн
// сверху мы создали независимую поверхностную копию объекта, которая не зависит не от намберс не от адд

const clone = Object.assign({}, add); // в колне лежит поверхностная копия предыдущего объекта адд

clone.d = 20;

/* console.log(add);
console.log(clone); */


//3-й метод создаем копию массива 

const oldArray = ['a', 'b', 'c'];
/* const newArray = oldArray; */ // если оставим такую структуру, то положится просто ССЫЛКА на олд эррей, изменяя нью будет меняться и олд
//что бы создать копию мы добавляем к .слайс

const newArray = oldArray.slice();

newArray[1] = 'dasdsadasdsadas';

console.log(newArray);
console.log(oldArray);


// 4-й способ

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);


// пример посложнее:

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// выше разбирались с разворотом массивов

// теперь с объектами:

const array = ["a", "b"];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);

