var arrs = [{
        id: 1,
        name: 'js',
        coin: 40
    },
    {
        id: 2,
        name: 'java',
        coin: 0
    },
    {
        id: 3,
        name: 'html',
        coin: 20
    },
    {
        id: 4,
        name: 'css',
        coin: 10
    },
    {
        id: 5,
        name: 'css',
        coin: 10
    },
]

// forEach() lặp  qua các phần tử
arrs.forEach(function(arr, index) {
    // console.log(index,arr);
});
// every() các phần tử phải thỏa mãn 1 đk nào đó
var isFree = arrs.every(function(arr, index) {
    return arr.coin === 0;
});
// console.log(isFree)
// some() chỉ cần phần tử phải thỏa mãn 1 đk nào đó
var isFree = arrs.some(function(arr, index) {
    return arr.coin === 0;
});
// console.log(isFree)
// find() trả về phần tử đầu tiên thỏa mãn
var item = arrs.find(function(arr, indec) {
    return arr.name == 'css';
});
// console.log(item)
// filter() trả về array toàn bộ phần tử thỏa mãn
var items = arrs.filter(function(arr, indec) {
    return arr.name == 'css';
});
// console.log(items)
//map() sửa các phần tử của array
//Thực hiện vòng lặp lặp qua tất cả phần tử 
function handler(arr, index) {
    return {
        id: arr.id,
        name: `Khoa hoc: ${arr.name}`,
        coint: arr.coin,
        coinText: `Gia khoa hoc = ${arr.coin}`
    };
};
var newArr = arrs.map(handler);
// console.log(newArr)
// console.log(arrs)
// reduce() nhận 1 giá trị duy nhất sau khi tính toán
var i = 0;

function coinHandler(total, arr, index, originArray) {
    var tong = total + arr.coin;
    // console.table({
    //     'Lượt chạy': ++i,
    //     'Biến tích trữ': accumlator,
    //     'Giá khóa học': currentValue.coin,
    //     'Tích trữ đc': tong
    // });
    // console.log(currentValue);
    return tong;
}
var totalCoin = arrs.reduce(coinHandler, 0);
// console.log(totalCoin)
// Flat làm phẳng mảng để các phần tử cùng cấp
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
// console.log(flatArray)
var topics = [{
    topic: "front-end",
    courses: [{
        id: 1,
        title: "HTML"
    }, {
        id: 2,
        title: "CSS"
    }, {
        id: 3,
        title: "JS"
    }]
}, {
    topic: "back-end",
    courses: [{
        id: 4,
        title: "Nodejs"
    }, {
        id: 5,
        title: "C#"
    }, {
        id: 6,
        title: "java"
    }]
}]
var arrCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses)
}, []);
// console.log(arrCourses)
// ứng dụng in code html
var html = arrCourses.map(function(course) {
    return `<div>
    <h2>${course.title}</h2>
    <p>Id: ${course.id}</p>
    </div>`
});
// console.log(html.join(''))
var arrTitle = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses.reduce(function(title, course) {
        return title.concat(course.title);
    }, []));
}, []);
// console.log(arrTitle)

// Tạo reduce
const numbers = [1, 2, 3, 4, 5];
Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        result = this[0];
        i = 1;
    }
    for (i; i < this.length; ++i) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
var result = numbers.reduce2(function(total, number) {
    return total + number;
});
console.log(result);

// includes method là phương thức có sẵn của array và string
//Tìm kiếm phần tử trả về true false
var title = 'responive web design';
console.log(title.includes('web', 0));