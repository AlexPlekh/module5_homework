// Задача 6

/* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

// Данный алгоритм ничего не выдаст, если дан пустой массив, и выдаст false, если массив заполнен NaN.
let arr;
arr = [false, 1, 2, 3, `four`, null];

let i = 0
do {
    if (arr[i] === arr[0]) {
        if (i === arr.length - 1) {
            
            console.log(true);
        };
    } else {
        console.log(false);
        break
    }
    i++
} while (i < arr.length);