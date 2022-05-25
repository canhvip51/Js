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

// BT sau 1 s hiện 1, 2,
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(() => { resolve('mat them 1s') }, ms)
//     })
// }
// sleep(1000)
//     .then((e) => {
//         console.log(e);
//         console.log(1);
//         return sleep(1000);
//     })
//     .then((e) => {
//         console.log(e);
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Co loi');
//         });
//     })
//     .then((e) => {
//         console.log(e);
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch(function(err) {
//         console.log(err)
//     })
var promise = new Promise(function(resolve, reject) {
    //Logic
    reject('Error')
});
promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        // console.log(err);
    })
    // 1. Promise.resolve
var promiseResolve = Promise.resolve('Success');
// 2. Promise.reject
var promiseReject = Promise.reject('Error')
    .catch(function(err) {

    });
// 3. Promise.all
var promise1 = new Promise(function(resolve, reject) {
    //Logic
    setTimeout(function() {
        resolve([1]);
    }, 1000)

});
var promise2 = new Promise(function(resolve, reject) {
    //Logic
    setTimeout(function() {
        resolve([2, 3]);
    }, 2000)

});
var promiseReject = Promise.all([promise1, promise2])
    //cach 1
    // .then(function(result) {
    //     console.log(result[0].concat(result[1]));
    // })
    //cach 2
    .then(function([result1, result2]) {
        // console.log(result1.concat(result2));
    })
    //example
var users = [{
        id: 1,
        name: 'Canh'
    },
    {
        id: 2,
        name: 'Le'
    },
    {
        id: 3,
        name: 'Thang'
    }
];
var comments = [{
        id: 1,
        user_id: 1,
        content: 'Hello'
    }, {
        id: 2,
        user_id: 2,
        content: 'bye'
    }, {
        id: 2,
        user_id: 1,
        content: 'Quan que'
    }]
    //1. Lay comments
    //2. Tu comments lays ra user_id
    //3.tu user_id lay ra user tuong ung
    //Fake APi
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    })
};

function getUsers(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        resolve(result);
    }, 1000)
}
getComments()
    .then(function(comments) {
        var userId = comments.map(function(comment) {
                return comment.user_id;
            })
            // console.log(userId);
        return getUsers(userId)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                };
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
            commentBlock.innerHTML = html;
        });
    })