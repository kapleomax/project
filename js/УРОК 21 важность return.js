'use strict';

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr)); /* - такое не всегда удобно, часто будет следуюзая запись: */

const res = convert(500, usdCurr); /* - тут тоже самое, просто создаётся еще 1 промежуточная переменная */
promotion(res);



function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return 
    }
    console.log('Done!');   /* - на 3 заканчивается, "дан" не выводится в консоль, потому что i = 3 и ретёрн, на нём конец */
}

test();



function doNothing() {};
console.log(doNothing() === undefined);