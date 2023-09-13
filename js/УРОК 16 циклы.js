"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break; /* - прерывает цикл на 6 */
        /* continue; */  - /* не прерывает цикл, а пропускает шаг в данном случае 6 */
    }

    console.log(i);
}