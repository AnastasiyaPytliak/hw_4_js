// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// > Для 2021 это будет 5.
let sumNum = prompt('Введите любое число, которое состоит из нескольких цифр', ' ')

function getNumbersSum(sumNum){
    let result = "" + sumNum
    let sum1 = 0

    for (i = 0; i < result.length; i++) 
    sum1 += +result[i]
    return sum1
}

console.log(getNumbersSum(sumNum));