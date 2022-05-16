var boxElement = document.querySelector('.box');
// boxElement.style.width = '100px';
// boxElement.style.height.height = '200px';
// boxElement.style.backgroundColor = 'red';
// các viết khác
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});
console.log(boxElement.style.backgroundColor)