//Задание 1

const Sum = (a, b) => {
    let result = a + b;
    console.log(result)
    if (result > 10) {
        console.log('true')
    } else {
        console.log('false')
    }
}
Sum(4,5)
Sum(10,8)

//Задание 2

const GetNumber = (a) => {
    let result = a
    if(result<0) {
        console.log('true')
    }else {
        console.log('false')
    }
}
GetNumber(-10)
GetNumber(5)

//Задание 3


//Задание 4

let str1 = ['Катя', 'Лена', 'Аня', 'Женя', 'Оля'];
let str2 = ['помидор', 'огурец', 'морковь'];

const check = (str,arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (str == arr[i]) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
check('Оля', str1);

//Задание 5

const arrayFill = (x,y) => {
    let newArrayFill = [];
    for (let i = 0; i < y; i++) {
        newArrayFill.push(x);
    }
    return newArrayFill;
}
console.log(arrayFill('x',5));

//Задание 6

let day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let countDay = 3;

for (let i = 0; i < day.length; i++) {
    if (i == countDay) {
        document.write('<i>' + day[i] + '</i> <br>');
    } else {
        document.write(day[i] + '<br>');
    }
}


// //Задание 7

const GetOptions = (num) => {
    let newarr = num;
    let newarr2 = 0;
    for (let i = 0; i < num; i++) {
        newarr /= 2;
        if (newarr < 50) {
            newarr2 = i;
            break;
        }
    }
    return newarr2;
}

console.log(GetOptions(1200));

