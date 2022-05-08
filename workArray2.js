var arrs=[
    {
        id:1,
        name:'js',
        coin:40
    },
    {
        id:2,
        name:'java',
        coin:0
    },
    {
        id:3,
        name:'html',
        coin:20
    },
    {
        id:1,
        name:'css',
        coin:10
    },
    ]

// forEach() lặp  qua các phần tử
arrs.forEach(function(arr,index){
// console.log(index,arr);
});
// every() các phần tử phải thỏa mãn 1 đk nào đó
var isFree= arrs.every(function(arr,index){
    return arr.coin===0;
});
console.log(isFree)
// some() chỉ cần phần tử phải thỏa mãn 1 đk nào đó
// find() trả về phần tử đầu tiên thỏa mãn
// filter() trả về array toàn bộ phần tử thỏa mãn
// map()
// reduce()
