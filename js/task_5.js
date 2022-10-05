// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными,
//  найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.

// ```
//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
// ```

let a1 = +prompt('Please enter first number')
let b1 = +prompt('Please enter second number')

function getSumm(a1, b1) {
    if (a1 === b1) {
        return a1 + " Since both value are same"
    } else if (a1 <= b1) {
        let sum = 0
            while (a1 <= b1) {
                sum += a1;
                a1++
            }
        return sum
    } else {
        return "Second number is not bigger then first"
    }
} 

alert(getSumm(a1, b1))