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

function coinHandler(accumlator, currentValue, currentIndex, originArray) {
    var tong = accumlator + currentValue.coin;
    console.table({
        'Lượt chạy': ++i,
        'Biến tích trữ': accumlator,
        'Giá khóa học': currentValue.coin,
        'Tích trữ đc': tong
    });
    console.log(currentValue);
    return tong;
}
var totalCoin = arrs.reduce(coinHandler, 0);
console.log(totalCoin)