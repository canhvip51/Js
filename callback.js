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
console.log(html.join(''))