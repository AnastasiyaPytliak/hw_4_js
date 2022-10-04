// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат
//  переплаты по кредиту:

// + процентная ставка в год — 17%,
// + количество лет — 5.

// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

let year = 5
let procent = 0.17
let sumCredit = 10000

let sumProcent
let sum3

function getSumCredit(sumCredit) {
    sumProcent = (sumCredit * procent * year).toFixed(0)
    return sumProcent
}

console.log(`Сумма переплаты составит: ${getSumCredit(sumCredit)}`)

