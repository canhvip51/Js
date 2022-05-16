// Class list 
// Chỉ có thể sử dụng trong element node

var boxElement = document.querySelector('.box');
console.log(boxElement.classList)
    //add thêm class
boxElement.classList.add('red', 'blue', 'yellow');
//contains check chứa 1 class
console.log(boxElement.classList.contains('red'));
//remove xóa 1 class
boxElement.classList.remove('blue')
    //toggle thêm hoặc gỡ bỏ 1 class
    //chỉ chọn đc 1 class 1 lần
setInterval(() => {
    boxElement.classList.toggle('red')
}, 200)