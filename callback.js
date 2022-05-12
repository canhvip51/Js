// Call back
// Là hàm được sử dụng như 1 biến
// Khi gọi hàm khác
function myFunction(param) {
    if (typeof param === 'function') {
        param('Học lập trình');
    }
}

function myCallBack(value) {
    console.log(`Value: ${value}`);

}
// myFunction(myCallBack)
var khoahocs = ['java', 'css', 'html'];
Array.prototype.map2 = function(callback) {
    if (typeof param === 'function') {
        var outputArr = [];
        var arrLength = this.length;
        for (let i = 0; i < arrLength; ++i) {
            var result = callback(this[i], i);
            console.log(result);
            outputArr.push(result);
            return outputArr;
        }
    }
};
var html = khoahocs.map2(function(khoahoc, index) {
    return `<h2>${khoahoc}</h2>`;
});
// console.log(html.join(''))
//find
var arrs = [{
        id: 1,
        name: 'js',
        coin: 40
    },
    {
        id: 2,
        name: 'java',
        coin: 20
    },
    {
        id: 3,
        name: 'html',
        coin: 20
    },
    {
        id: 4,
        name: 'java',
        coin: 0
    },
]
arrs.length = 100;
arrs.push({
    id: 5,
    name: 'css',
    coin: 0
})
Array.prototype.find2 = function(callback) {
        if (typeof callback == 'function') {
            for (let i in this) {
                if (!this.hasOwnProperty(i)) {
                    break;
                }
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        }
    }
    // var isFind = arrs.find2(function(item, index) {
    //         return item.name == 'java';
    //     })
    // console.log(isFind)
Array.prototype.filter2 = function(callback) {
    if (typeof callback == 'function') {
        var arr = [];
        for (var i in this) {
            if (!this.hasOwnProperty(i)) {
                break;
            }
            if (callback(this[i], i, this)) {
                arr.push(this[i]);
            }
        }
        return arr;
    }
}
var isFilter = arrs.filter2(function(item, index) {
        return item.name == 'java';
    })
    // console.log(isFilter)
Array.prototype.every2 = function(callback) {
    if (typeof callback == 'function') {
        for (var i in this) {
            if (!this.hasOwnProperty(i)) {
                break;
            }
            if (!callback(this[i], i, this)) {
                return false;
            }
        }
        return true;
    }
}
var isEvery = arrs.every2(function(item, index) {
    return item.coin == 0;
})

Array.prototype.some2 = function(callback) {
    if (typeof callback == 'function') {
        for (let i in this) {
            if (!this.hasOwnProperty(i)) {
                break;
            }
            if (callback(this[i], i, this)) {
                return true;
            }
        }
        return false;
    }
}
var isEvery = arrs.some2(function(item, index) {
        return item.coin == 0;
    })
    // console.log(isEvery)