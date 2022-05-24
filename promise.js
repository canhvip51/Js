//Promise
// -Sync ĐỒng bộ
// -Asyn bất dồng bộ settimeout, setInterval, fetch, XMLHttpRequest
//File, request animation frame

//Pain (Vấn đề)
//Call back hell, Pyramid of doom
setTimeout(function() {
        // console.log(1);
        setTimeout(function() {
            // console.log(2);
            setTimeout(function() {
                // console.log(3);
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
        resolve();
        //reject('Co loi')
    }
);
// .then: resolve
// .catch: reject
// .finally: 1 trong 2 
// promise
//     .then(function() {
//         console.log('1');
//         return 1;
//     })
//     .then(function(e) {
//         let rs = e + 2;
//         console.log(rs);
//         return rs;
//     })
//     .then(function(e) {
//         let rs = e + 3;
//         console.log(rs);
//     })
//     .catch(function(error) {
//         console.log(error);
//     }).finally(function(e) {
//         console.log('done');
//     })
//return ra promise
promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve([1, 2, 3]);
            }, 3000);
        });
    })
    .then(function(data) {
        //console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    }).finally(function(e) {
        //console.log('done');
    })

//BT sau 1s hiện 1 , 2, 
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(() => { resolve('mat them 1s') }, ms)
    })
}
sleep(1000)
    .then((e) => {
        console.log(e);
        console.log(1);
        return sleep(1000);
    })
    .then((e) => {
        console.log(e);
        console.log(2);
        return sleep(1000);
    })
    .then((e) => {
        console.log(e);
        console.log(3);
        return sleep(1000);
    })