// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

let a = +prompt('Please enter value first side tringle','')
let b = +prompt('Please enter value second side tringle','')
let c = +prompt('Please enter value third side tringle','')

function createTriangle(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return "true"
    } else {
        return "false"
    }
}

console.log(createTriangle(a, b, c))