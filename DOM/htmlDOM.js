//HTML DOM
//1. Element : có thể lấy bằng id, class, tag, css selector, HTML collection
console.log('DOM Element');
// Id
var headingNode = document.getElementById('heading');
// console.log({ element: headingNode })
// Class trả về HTMLCollection
var headingNodes = document.getElementsByClassName('headings');
// console.log(headingNodes)
//Tag trả về HTMLCollection
var headingNodeTags = document.getElementsByTagName('h1');
// console.log(headingNodeTags)
//CSS selector
// lấy ra 1 element
var headingNodeSelector = document.querySelector('.headings')
    // lấy ra 1 Nodelist
var headingNodeSelectors = document.querySelectorAll('.headings')
    // console.log(headingNodeSelectors)
    // HTML collection

//2. Attribute
console.log('DOM Attribute');
var headingElement = document.querySelector('h1');
headingElement.title = 'titleHeading';
headingElement.id = 'idHeading';
//Thêm attribute thường dùng
headingElement.setAttribute('myAttr', 'myatrr');
//Thêm class
headingElement.classList.add('myClass');
headingElement.classList.add('myClass1');
//Xóa class
headingElement.classList.remove('myClass');
//get value của attribute thường dùng
// console.log(headingElement.getAttribute('class'));
//Xóa attribute
headingElement.removeAttribute('class')
    //3. Text
console.log('DOM Text');
var head2Element = document.querySelector('.heading');
//lấy trả trong thẻ giống như nội dung được nhìn thấy trên trình duyệt
// console.log(headElement.innerText);
//lấy trả trong thẻ  nội dung thực sự trên DOM
// console.log(headElement.textContent);
//sửa nội dung
head2Element.innerHTML = 'new heading';
// console.log(headElement.innerHTML);

// document.write('DOM');