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
    console[type](log);
}
// logger(undefined, 'error')
// --------------
// Enhanced object Literals
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến
var name = "JS";
var price = 1000;
var khoahoc = {
    //1
    name,
    price,
    //2
    getName() {
        return name;
    }
};
3.
var fieldName = 'new-name';
var fieldPrice = 'new-price'
const khoahoc2 = {
    [fieldName]: 'Java',
    [fieldPrice]: 100,
}
console.log(khoahoc2);
// Destructuring
// Rest paramenters
// Spread

// tagged template Literals
// Modules

//Babel