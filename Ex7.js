// Задача 7

/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

let arr;
arr = [false, 1, 2, 3, `four`, null];

let oddCount = 0;
let zeroCount = 0;
let evenCount = 0;

arr.map(function(item, index, array) {
    if (item === 0) {
        zeroCount++;
    } else {
        if (item % 2 === 0 && item / item === 1) {
            evenCount++;
        } else {
            if (item % 2 === 1) {
                oddCount++;
            }
        }
    }
});

console.log(`Количествл нулей - ${zeroCount}`);
console.log(`Количествл четных - ${evenCount}`);
console.log(`Количествл нечетных - ${oddCount}`);
