// DOM event
// Attribute events
var h1Element = document.querySelector('h1');
console.log(h1Element);
// h1Element.onclick = function() {
//     console.log(Math.random());
// };
//Mouse event
h1Element.onclick = function(e) {
    // console.log(e);
};
var h1Elements = document.querySelectorAll('h1');
//dùng var i sẽ bị sai vì var sẽ đc hiểu là biến global
for (let i = 0; i < h1Elements.length; ++i) {
    h1Elements[i].onclick = function(e) {
        // console.log(e.target) // thường dùng
        console.log(h1Elements[i])

    }
}