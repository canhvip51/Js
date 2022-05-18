//DOM event
//1.Input / selcect
//Key up/  down
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function(e) {
    // console.log(e.target.value)
}
inputElement.oninput = function(e) {
    // console.log(e.target.value)
}
inputElement.onkeyup = function(e) {
        // console.log(e.target.value)
    }
    // onkeypress không nhận phím Esc
inputElement.onkeypress = function(e) {
    // console.log(e.target.value)
}
inputElement.onkeydown = function(e) {
    // console.log(e.target.value)
    console.log(e.which)
    switch (e.which) {
        case 27:
            console.log('exit');
            break;
    }

}
var checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function(e) {
    console.log(e.target.checked)
}
var selectElement = document.querySelector('select');
selectElement.onchange = function(e) {
    console.log(e.target.value)
}