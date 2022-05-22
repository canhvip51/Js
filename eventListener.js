// Event listener
var byn = document.getElementById('btn');
console.log(btn);
//Add
//Remove
//Xử lý nhiều việc bằng DOM Event
// btn.onclick = function() {
//     console.log('viec 1');
//     console.log('viec 2');
//     console.log('viec 3');
// }
// setTimeout(() => {
//     btn.onclick = function() {}
// }, 500);
//Xử lý nhiều việc bằng Event Listener
function word1() {
    console.log('viec 1')
}

function word2() {
    console.log('viec 2')
}
btn.addEventListener('click', word1)
btn.addEventListener('click', word2)
btn.removeEventListener('click', word1);