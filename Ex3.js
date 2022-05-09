// Задача 3

/* Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH */

let string;
string = `Hello`;

// Вариант 1
console.log( string.split(``).reverse().join(``) )

// Вариант 2
let reversedString = ``;

for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
}

console.log(reversedString);