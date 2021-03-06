/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
    if (array.length === 0) {
        throw Error('empty array')
    }
    if (typeof fn === "function") {
        throw Error('fn is not a function')
    }

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === false) {
            return false
        }
    }
}

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    if (array.length === 0) {
        throw Error('empty array')
    }
    if (typeof fn === "function") {
        throw Error('fn is not a function')
    }

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === true) {
            return true
        }
    }
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    if (typeof fn === "function") {
        throw Error('fn is not a function')
    }

    result = [];
    for (let argument = 1; argument < arguments; argument++) {
        try {
            fn(argument)
        } catch (e) {
            result.push(argument)
        }
    }
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {
    if (typeof number !== 'number') {
        throw Error ('number is not a number')
    }

    let sum = () => {
        sum = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    };

    let dif = () => {
        dif = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            dif -= arguments[i]
        }
        return dif
    };


    let div = () => {
        div = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] === 0) {
                throw Error('division by 0')
            }
            div /= arguments[i]
        }
        return div
    };


    let mul = () => {
        mul = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            mul += arguments[i]
        }
        return mul
    };

    return {
        'sum': sum,
        'dif': dif,
        'div': div,
        'mul': mul

    }
}


export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
