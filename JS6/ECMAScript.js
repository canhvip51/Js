// Let, const
// Var/ let,Const: Scope, Hosting
// const / var, let: Assignment

//Mục đích tạo ra biến
//var biến global
//Hosting chỉ có trong var
//const hằng số
{
    var course1 = "JS";
    let course2 = "a";
    const course3 = "a";
    if (true) {
        {
            {
                let course2 = "Html";
                const course3 = "v";
                // console.log("1: " + course1)
                // console.log("2: " + course2)
                // console.log("3: " + course3)
            }
        }
    }


}
// console.log(course1)
// console.log(course2)
// console.log(course3)
// ---------------
// Template Literals
const courseName = 'JS';
const courseName2 = 'Css';
const descriptionNmae = `Html ${courseName} ${courseName2}`;

// Extension Tabnice gợi ý code 
// Thêm ký tự đặc biệt "\"
// ----------------
// Multi-line String
var nmutiline = `Html
 ${courseName}
 ${courseName2}`;
//  ------------
// Arrow function
const sum = (a, b) => {
    return a + b
};
const sumObjs = (a, b) => ({ a: a + b });
const log = msg => console.log(msg)
    //arrow function k co context
const course = {
        name: "JS",
        getName: () => {
            return this; //context
        }
    }
    //arrow function k thể tạo contructor
    // console.log(course.getName())
    // -----------------
    // Classes
    //có thể hiểu cách viết khác của contructor function
    // function Course(name, price) {
    //     this.name = name;
    //     this.price = price;

//     this.getName = function() {
//         return this.name;
//     }
// const isSuccess = false;
// }
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    run() {
        const isSuccess = false;
        if (true) {
            isSuccess = true;
        }
    }
}
const phpCourse = new Course('PHP', 100);
const cssCourse = new Course('CSS', 100)
    // -------------
    // Default prameter values - Giá trị mặc định của value
    //mục đích dùng khi trong hàm có tham số không bắt buộc phải nhập
function logger(log = "Mac dinh", type = 'log') {
    // console[type](log);
}
// logger(undefined, 'error')
// --------------
// Enhanced object Literals
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến
var namea = "JS";
var price = 1000;
var khoahoc = {
    //1
    namea,
    price,
    //2
    getName() {
        return name;
    }
};
3.
var fieldName = 'new-name';
var fieldPrice = 'new-price';
const khoahoc2 = {
    [fieldName]: 'Java',
    [fieldPrice]: 100,
};
// console.log(khoahoc2);
// ------------
// Destructuring (Phân rã)

//arr
var arr = ['Js', 'PHP', 'css'];
var [a, , c] = arr;
// console.log(a, c)
//obj
var khoahoc3 = {
    ten: 'Javascript',
    price: 10,
    isFree: false,
    con: { tencon: "JSREact" }
};

var { ten: tenCha, con: { tencon: tenCon }, descriptions = "default" } = khoahoc3;
// console.log(tenCha, tenCon, descriptions)
// Rest paramenters bù của destructuring
//arr
var [a1, a2, ...rest] = arr;
var { ten, price } = khoahoc3;
//obj
var { ten, isFree, ...rest1 } = khoahoc3;
// console.log(ten, rest1)
//Viết function console.log
function logger1(...params) {
    // console.log(arguments);
    // console.log(params);
}
// console.log(logger1(1, 2, 3, 4, 5, 6, 7, 8))
// ----------------
// Spread (Toán tử giải)
var array1 = ['Js', 'Ruby', 'Concat'];
var array2 = ['ReactJs', 'Dart'];
var array3 = [...array1, ...array2];
// console.log(array3)
var obj1 = {
    nameObj: "Js"
}
var obj2 = {
    priceObj: 100
}
var obj3 = {
        ...obj1,
        ...obj2
    }
    // console.log(obj3)
    //TỔNG KẾT
    //REST sử dụng cùng Destructuring, đinh nghĩa ra tham số
    //SPREAD sử dụng truyền đối số vào hàm
    // ---------
    // Tagged template Literals
function highLight([first, ...strings], ...values) {
    return values.reduce((giatritrc, giatritiep) => [...giatritrc, `<span>${giatritiep}</span>`, strings.shift()], [first])
        //console.log(rest)
}
var brand = "F8";
var jsf8 = 'Javascript';
var htmlHigh = highLight `Hoc lap trinh ${jsf8} tai ${brand}!`;
console.log(htmlHigh)
    // Modules: Import / Expor
    // import module
    // from './module.js'
    // trong 1 model có thể có nhiều Export  và chỉ có 1 default
import module
//, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR,
// }
from './module.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR,
// }
// from './constType.js';
import * as constants
from './constType.js';
console.log(module)
console.log(constants)
module("msg wwww", constants.TYPE_LOG)

import { newNameModule }
from './index.js';
console.log(newNameModule)

//Babel