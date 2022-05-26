//JSON
//1. Là 1 đinh dạng dữ liệu (chuỗi)
//2. Javascript Object Notation
//3 JSON : NUmber,string, Boolean, Null , Array, Objext

//Mã hóa / Giải mã
//Endcode / decode
//Stringify từ Javascript types => JSON
/// Parse từ JSON => javacsript type
var json = '["Java","PHP"]';
// var json = '{"name":"Canh","age":18}';
// var a = '1';
// var a = 'null';
var a = '"string 1"';

console.log(JSON.parse(json))
    // console.log(JSON.stringify(['J"s', 'PHP']))
console.log(JSON.stringify({ name: 'canh', age: 2 }))
    //  Thư viện Json server: API Server