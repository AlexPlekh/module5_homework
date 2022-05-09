// Задача 5

/* Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива. */

let arr;
arr = [false, 1, 2, 3, `four`, null];

console.log(arr.length);

arr.map(function(item, index, array) {
    console.log(item);
});