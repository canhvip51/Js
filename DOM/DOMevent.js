// // DOM event
// // Attribute events
// var h1Element = document.querySelector('h1');
// console.log(h1Element);
// // h1Element.onclick = function() {
// //     console.log(Math.random());
// // };
// //Mouse event
// h1Element.onclick = function(e) {
//     // console.log(e);
// };
// var h1Elements = document.querySelectorAll('h1');
// //dùng var i sẽ bị sai vì var sẽ đc hiểu là biến global
// for (let i = 0; i < h1Elements.length; ++i) {
//     h1Elements[i].onclick = function(e) {
//         // console.log(e.target) // thường dùng
//         // console.log(h1Elements[i])

//     }
// }

// 1.preventDefault loại bỏ 1 sự kiện mặc định của tag
var aElement = document.querySelectorAll('a');
for (let i in aElement) {
    aElement[i].onclick = (e) => {
        if (!e.target.href.startsWith('https://fullstack.edu.vn/')) {
            e.preventDefault();
        }
        console.log(e.target.href);
    }
}

// 2.stopPropagation loại bỏ sự kiện nổi bọt( lan truyền)
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e) {
    e.preventDefault();
}
ulElement.onclick =
    function(e) {
        console.log(e.target);
    }
document.querySelector('div').onclick = function(e) {
    console.log('DIV Js')
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me Js')
}