// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя
// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

let booleanValue = true
// let booleanValue = prompt("Введите true или false", ' ')

let foo = function () {
    console.log(foo.name);
}

let boo = function () {
    console.log(boo.name);
}

function fooBoo(booleanValue, foo, boo) {
    if (booleanValue = true) {
        return foo.name
    } else {
        return boo.name
    }
}

console.log(fooBoo(booleanValue, foo, boo));
