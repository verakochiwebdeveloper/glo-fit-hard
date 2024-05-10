// 1) Создать переменную num со значением 266219 (тип данных число)

const num = 266219;
/*Вывести в консоль произведение (умножение) цифр этого числа

Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.*/


numToString  = num.toString();
numArray = numToString.split('');
let sum = 0;

for (i = 0; i < numArray.length;) {
    sum *= numArray[i];

    //не знаю в чем ошибка 

};







console.log(numToString);
console.log(numArray);
console.log(result);


//3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

const sumdouble = sum **3;

//4)Вывести в консоль первые 2 цифры полученного числа

console.log(sumdouble.toString().slice(0,1))