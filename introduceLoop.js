// for - Lặp với điều kiện đúng
for(var i= 1; i<11;++i){
    // console.log(i);
}
//object
var info={
name:'canh',
age:2,
email:'canh@gmai.com',
animals :['fox','dog','cat']
};
// for/in - Lặp qua key của đối tượng
for (const key in info) {
        // console.log(key);    
}
// for/of - Lặp qua value của mảng hoặc chuỗi
for (const iterator of info.animals) {
    // console.log(iterator);    
}
for (const iterator of Object.keys(info)) {
    console.log(info[iterator]);  
}
for (const iterator of Object.values(info)) {
    //   console.log(iterator);  
}
// while - Lặp khi điều kiện đúng
// do/while - Lặp ít nhất 1 lần sàu đó lặp khi điều kiện đúng
//Set tạo ra 1 object có giá trị duy nhất
arr = [1,1,2,3,4,1,2,3,1,2,5,4]
console.log( [...new Set(arr)] );
// Loop tốn CPU 
// Đệ quy tốn ram