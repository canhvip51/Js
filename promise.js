//Promise
// -Sync ĐỒng bộ
// -Asyn bất dồng bộ settimeout, setInterval, fetch, XMLHttpRequest
//File, request animation frame

//Pain (Vấn đề)
//Call back hell, Pyramid of doom
setTimeout(function() {
        console.log(1);
        setTimeout(function() {
            console.log(2);
            setTimeout(function() {
                console.log(3);
            }, 1000)
        }, 200);

    }, 1000)
    // Ý tưởng giải  quyết
    // Được sử dụng lập trình bất đồng bộ để giải quyết callback hell
    // Promise có 3 trạng  thái : 
    // 1, Pendding nếu k trả về 1 trong 2 hàm thì sẽ bị tràn memory
    // 2. Fulfilled coi là thành công
    // 3. Rejected coi là tthất bại

var promise = new Promise(
    //Executor
    //2 function  1 : giải quyết, 2 : từ chối
    function(resolve, reject) {
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
        // resolve([{ id: 1, name: 'sđsds' }])
        reject('Co loi')
    }
);
// .then: resolve
// .catch: reject
// .finally: 1 trong 2 
promise.then(function(e) {
    console.log('success');
    console.log(e);
}).catch(function(error) {
    console.log(error);
}).finally(function(e) {
    console.log('done');
})