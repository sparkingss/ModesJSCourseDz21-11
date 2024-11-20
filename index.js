// Задание 1
// Напишите функцию sum, которая принимает любое количество чисел и возвращает их сумму, используя объект arguments. 

function getSum() {
    return [...arguments].reduce((acc, num) => acc += num, 0);
}

console.log('Сумма элементов: ', getSum(1, 2, 3, 44));

/*
Задание 2
Напишите функцию, которая принимает любое количество чисел и возвращает массив, содержащий только чётные числа. 
console.log(filterEvens(1, 2, 3, 4, 5, 6)); // [2, 4, 6] 
*/

function filterEvens(){
    return [...arguments].filter(num => num % 2 === 0);
}

console.log('Отфильтрованный массив с чётными числами: ', filterEvens(1, 2, 3, 4, 5, 6));

/*
Задание 3
Что будет выведено в консоль? В случае, если происходит потеря контекста, то какое решение будет верным?
const obj = { 
  name: 'Object', 
  getName: function () { 
	return this.name; 
  } 
};
const getName = obj.getName; 
console.log(getName());
*/

/*
Ответ: будет потеря контекста, т.к. this.name в методе объекта obj обращается к полю name в контексте объекте, в котором он вызывается.
Могут быть следующие решение, в зависимости от ситуации:
    1. Создание отдельного объекта, в котором будет представлено поле name и вызов у него метода getName из obj при помощи call.
    2. Для функции getName через метод bind привязать контекст функции к объекту, чтобы она при вызове всегда обращалась к контексту этого объекта.
*/

const obj = { 
    name: 'Object', 
    getName: function () { 
      return this.name; 
    }
  };

const anotherObj = {
    name: 'Second object'
}

console.log(obj.getName.call(anotherObj)); // первое решение

const getName = obj.getName.bind(obj); // второе решение
console.log(getName());



/*
Задание 4
У вас есть функция greet, которая принимает имя и выводит приветственное сообщение. Напишите, как вы могли бы использовать методы call, apply, и bind для вызова этой функции с контекстом объекта person.
const person = { name: 'Alice' };
*/

/*
Наверное имелось ввиду, чтобы функция работала именно с контекстом,
иначе смысл использовать для неё методы bind, call, apply, если по условию "которая принимает имя" она принимает имя,
т.е. её можно вызывать через greet(person.name)?
*/
function greet(){
    return `Greetings, ${this.name}!`;
}
const person = { name: 'Alice' };

console.log('Первый вызов через call: ', greet.call(person));
console.log('Второй вызов через apply: ', greet.apply(person));
console.log('Третий вызов через bind: ', greet.bind(person)());

// //На всякий через принимаемый аргумент
// const newGreet = function(name){
//     return `Greetings, ${name}!`;
// }

// console.log('Первый вызов через call: ', newGreet.call(person.name));
// // console.log('Второй вызов через apply: ', greet.apply(person));
// // console.log('Второй вызов через call: ', greet.bind(person)());

/*
Задание 4
Сумма двух чисел
Напишите стрелочную функцию, которая принимает два числа и возвращает их сумму.
*/

const getSumArrowFunc = (a, b) => {
    return a + b;
}

console.log('Сумма двух чисел: ', getSumArrowFunc(1, 2));

/*
Задание 5
Преобразование массива
Создайте стрелочную функцию, которая принимает массив чисел и возвращает новый массив, где все числа умножены на 2.
*/

const getDoubleValuesArray = (arr) => {
    return arr.map(num => num *= 2);
}

console.log('Массив чисел, умноженных на 2: ', getDoubleValuesArray([1, 2, 3, 44]));

/*
Задание 6
Подсчёт длины строк
Создайте стрелочную функцию, которая принимает массив строк и возвращает массив их длин.
*/

const getLengthsArr = (strArr) => {
    return strArr.map(str => str = str.length);
}

console.log('Массив длин строк: ', getLengthsArr(['hello', 'gogetit', 'blasphemy']));