'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border:'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

/* -- деструктуризация: */

const {border, bg} = options.colors;
console.log(border);


/* console.log(Object.keys(options).length); */ // - .length - вместо списка объектов выводит количество (4)

//console.log(options["colors"]["border"]); - пример если мы хотим получить свойства объекта в объекте

/* console.log(options.name);

delete options.name;

console.log(options); */

//let counter = 0;  /* -- создали переменную и вызвали её в консоль логе что бы посчитать количество свойст в опшинс */

/* for (let key in options) {  //-- эта команда "for in" нужна что бы перебрать все свойства и посмотреть что у нас внутри и что можно с этим сделать
    if (typeof(options[key]) === 'object') { //-- это условие для того, что бы перебирать объект в объекте как в нашем случае "колорс"
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++; 
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter); */



const sport = {
    first: 'football',
    second: 'valleyball',
    third: 'basketball',
    fourth: 'golf',
    xzsho: {                          //---- практиковался для себя
        color: 'black',
        xyialor: 'white'
    }
};

console.log(Object.keys(sport).length);  
