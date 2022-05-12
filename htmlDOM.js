//HTML DOM
//1. Element : có thể lấy bằng id, class, tag, css selector, HTML collection
// Id
var headingNode = document.getElementById('heading');
// console.log({ element: headingNode })
// Class
var headingNodes = document.getElementsByClassName('headings');
// console.log(headingNodes)
//Tag
var headingNodeTags = document.getElementsByTagName('h1');
// console.log(headingNodeTags)
//CSS selector
var headingNodeSelectors = document.querySelectorAll('.headings')
console.log(headingNodeSelectors)
    //2. Attribute
    //3. Text

// document.write('DOM');