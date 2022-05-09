// Задача 8

/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки. */

let map = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
]);

for (let k of map.keys()) {
    console.log(`Ключ - ${k}, значение - ${map.get(k)}`)
};