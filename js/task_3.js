// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по

// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

let str = "Javascript"
let value1 = 3
let value2 = 9
function getStr(str, value1, value2) {
    return str.substring(value1, value2);
}

console.log(getStr(str, value1, value2))