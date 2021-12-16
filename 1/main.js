/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
const city = 'Lviv';
console.log(city);
const country = 'Ukraine';
console.log(country);
const population = 1200000;
console.log(population);
const footballStadium = false;
console.log(footballStadium);
/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
let height = 40,
    width = 70;
let summary = height + width;
    console.log(summary);
/* 
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
let time = 2,
    speedofFisrt = 95,
    speedofSecond = 114;

let distance = ((speedofFisrt + speedofSecond) / time);
    console.log(distance);
/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log("randomNumber smaller 20");
} else if (randomNumber > 50) {
    console.log("randomNumber bigger 50");
} else {
    console.log('randomNumber bigger 20 and smaller 50');
}
/* 
    Задание 5:
    
    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/

const randomNumber2 = Math.floor(Math.random() * 100);

switch (true) {
    case randomNumber2<20:
        console.log("randomNumber smaller 20");
        break;
    case randomNumber2>50:
        console.log("randomNumber bigger 50");
        break;
    default:
        console.log('randomNumber bigger 20 and smaller 50');
        break;
}