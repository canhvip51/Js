//InnerHTML && OuterHTML
var boxElement = document.querySelector('.box');
//InnerHTML
console.log('InnerHTML');
//Thay thể trong thẻ html có selector thỏa mãn
// boxElement.innerHTML = `<h1 title="Heading">New Heading</h1>`;
// console.log(document.querySelector(`h1`).innerText)
//Lấy trong thẻ html có selector thỏa mãn
// console.log(boxElement.innerHTML);
// OuterHTML
console.log('OuterHTML');
//Lấy từ ngoài thẻ html có selector thỏa mãn
console.log(boxElement.outerHTML);
//Thay thể từ ngoài thẻ html có selector thỏa mãn
boxElement.outerHTML = `<h1 title="Heading">New Headingss</h1>`;