'use strict';

/* console.log(document.head); 

//что бы получить родителя бади, хед и тд, то есть "хтмл"
console.log(document.documentElement);  */

/* console.log(document.body.childNodes);  *///позволяет получить все ноды\узлы, которые находятся внутри родителя (всё что находится)
// в "бади в данном случае"

//свойство, которое получает получить либо 1 либо последнего ребенка внутри родителя
/* console.log(document.body.firstChild); 
аналог фёст чайлд с элементом:
console.log(document.body.firstElementChild); 
ласт чайлд:
console.log(document.body.lastChild);
ласт чайлд с элементом:
console.log(document.body.lastElementChild);  */

//команды, которые позволяют получить: родителя, соседей и детей:
/* console.log(document.querySelector('#current').parentNode);  *///получаем родителя от "каррент"
/* console.log(document.querySelector('#current').parentElement); */ //получаем именно "элемент" скипая переносы и прочую шляпу
//если хотим ещё выше на уровень подняться например в нашем случае к "враппер", то дублируем "пэрентнод" команду
/* console.log(document.querySelector('#current').parentNode.parentNode); */

/* console.log(document.querySelector('[data-current="3"]').nextSibling); */ //что бы получить следующего соседа

//предыдущего:
/* console.log(document.querySelector('[data-current="3"]').previousSibling);  */

//что бы получить следующего соседа именно "ЭЛЕМЕНТ":
/* console.log(document.querySelector('[data-current="3"]').nextElementSibling); */

//Что бы перебрать всех document.body.childNodes
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //этот оператор позволит остановить повторение цикла и начать его заново с новым элементом
        //a break полностью останавливает работу цикла
    }
    console.log(node);
}


