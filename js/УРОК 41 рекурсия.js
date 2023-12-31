//Рекурсия - приём когда функция вызывает саму себя

//возведение в степень:
// 1 metod
/* function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x; //ili result = x * result;
    }

    return result;
} */

// 2 metod
/* function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

pow(2, 1) // 2
pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) // 16 */

//база рекурсии - случай, который приводит сразу к завершению функции:
//    if (n === 1) {
//    return x;
//} - это БАЗА в нашем примере
// если завершаем большое значение, например 2 в степени 4, то когда-то функция придет к своей базе согласно функции выше

// шаг рекурсии - запуск вложенной функции, но уже с другим значением. В данном случае n уменьшается каждый раз на 1
// это и есть шаг

//глубина рекурсии - общее количество вложенных вызовов вместе с самым первым. В примере это число равно n


//пример:
let students = {
    js: [{
        name: 'John',
        progress:   100
}, {
        name: 'Ivan',
        progress: 60
}],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        //добавляем новый объект:, не массив. Если попробуем запустить способ 1, то она не сработает, потому что она рассчитана
        //на определенную структуру
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

//нужно посчитать средний програсс, 2 метода: цикл и рекурсия

// 1 метод циклы
/* function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    //используем цикл "фо оф" и обжект.валюэс:
    for (let course of Object.values(data)) { //тут мы говорим, что объект js и html превращаем в массив, js u html опускаются
        //и у нас формируется массив, перебираем массив с помощь "фо оф" и записываем в course массив
        // мы перебираем и получаем либо массив, либо объект как в случае с html: basic:, поэтому делаем развилку:
        //проверяем то на что мы попали является массивом или нет
        if (Array.isArray(course)) {
            students += course.length; //так как это массив, у него есть свойство длины(сколько элементов внутри этого массива)

            for(let i = 0; i < course.length; i++) {
                total += course[i].progress; //перебираем каждого студента, вытаскиваем прогресс и сумируем
            }
        } else { //если мы попадаем на объект, то практически повторяем, спускаясь ниже, рассматриваем не один большой объект, а 
            //а то что получили в html: basic: u html: pro:
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for(let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress; //перебираем каждого студента, вытаскиваем прогресс и сумируем
                }
            }
        }
    }
    
    return total / students;
}

console.log(getTotalProgressByIteration(students)); */
//Этот способ не очень хорош, потому что если у нас например появится в объекте "хтмл" не массив, а объект, то нужно усложнять
//функцию ещё проверка на массив или объект и тд


// 2 СПОСОБ, плюс её, что эта функция будет работать с любой вложенность, сколько бы мы не добавляли объектов в структуру

function getTotalProgressByRecursion(data) { //запускаем функцию рекурсии, в неё попадают данные "дата"
    //сначал определяемся с базой, т.е. с тем что заканчивает рекурсию:
    //в нашем случае это будет массив. Как только натыкаемся на массив, далее уже всё понятно
    //внутри этого условия посчитаем общий прогресс:
    if (Array.isArray(data)) { //проверяем, возможно дата это сразу массив
        let total = 0;

        for(let i = 0; i < data.length; i++) {
            total += data[i].progress; //перебираем каждого студента, вытаскиваем прогресс и сумируем
        }
        return [total, data.length]; //мы должны рассчитывать не только общий прогресс, но и количество студентов, поэтому тут
        //2 значения в "ретёрн". Делаем это с помощью массива
        //верхняя часть кода - это для массива
        //если объект который к нам приходит не массив, ТО попадаем в "элс":
    } else {
        let total = [0, 0]; // сразу формируем массив с нулями, что бы вернуть значения и дальше их в работу запустить
        
        for(let subData of Object.values(data)) { // т.к. это обьект должны перебрать каждое отдельное свойство
            //само название свойства нас не интересует, поэтому мы хотим получить их значения, т.е. Object.values
            //дата как раз туда и приходит
            // мы обращаемся к каждому значению этих свойств в качестве "субдата"
            //мы запускаем нашу функцию, но уже с "субдатой":
            // и дальше уже внутренняя функция будет решать что делать. Если наткнулась на массив, то высчитывает, если объект 
            //заново попадает в блок кода "элс" и запускат рекурсию
            //каждая из этих функций будет возвращать массив данных:
            // если массив, то получаем return [total, data.length];
            //если объект, то мы вернём тотал return total; который всё-равно является массивом let total = [0, 0];с данными
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        

        return total;
    }
}

//в итоге мы получаем результат, который содержит массив с двумя данными: общее кол-во прогресса и общее кол-во студентов

const result = getTotalProgressByRecursion(students);

// с этими данными мы уже можем что-то сделать, например одну часть массива разделить на другую
console.log(result[0]/result[1]);
