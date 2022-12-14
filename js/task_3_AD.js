// + Напишите программу для вычисления общей стоимости покупки телефонов.
// Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете.
// Вы также будете покупать аксессуары для каждого из телефонов.

// + После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.

// + Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.

// + Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара»,
// также как и переменную для вашего «баланса банковского счета».

// + Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.

// +  Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например,
// запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!

const tax = 0.26
const phonePrice = 400
const accessoriesPrice = 50
let bankAccount = +prompt('Укажите сумму на вашем счету','')

function taxOnPhone(phonePrice, tax) {
    return phonePrice * tax
}

function taxOnAccessories(accessoriesPrice, tax) {
    return accessoriesPrice * tax
}

let allPeopleWantIt = (phonePrice + taxOnPhone(phonePrice, tax) + accessoriesPrice + taxOnAccessories(accessoriesPrice, tax)).toFixed(2)

alert(`Стоимость одного телефона и одно акссесуара составила ${allPeopleWantIt} руб.`)

let count5 = 0

if (bankAccount > allPeopleWantIt){
    for (i = allPeopleWantIt; i <= bankAccount; i + allPeopleWantIt) {
            count5++
            bankAccount -= allPeopleWantIt
    }
    alert(`На текущие средства вы сможете приобрести несколько телефонов и аксессуаров к ним, а именно в количестве ${count5} штук`);
} else {
    alert(`У вас недостаточно средств`);
}
