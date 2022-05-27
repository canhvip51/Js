// API (Application programing interface) cổng giao tiếp của phần mềm
//Backen -> API(ỦL) -> Fetch -> JSON/XML
//->JSON.Parse -> Javascript types
//Render ra giao diện với HTML

// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postApi)
//     .then(function(response) {
//         // console.log(response)
//         return response.json();
//     })
//     .then(function(posts) {
//         // console.log(posts)
//         var htmls = posts.map(function(post) {
//             return `<li>
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//             </li>`;
//         });
//         var html = htmls.join('');
//         // document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function(err) {
//         console.log(err)
//     })
// HƯớng dấn dùng json server để tạo api
// b1. Tạo thư mục chứa npm
//b2.Vào thư mục cd json_server 
//b3. npm init để tạo tên gói package
//b4. npm i json-server cài đặt gói 
//b5. tạo file db.json chứa dữ liệu fake
//b6. Thêm "start": "json-server -p 3000 --watch db.json" dưới script của file package.json
//b5 . npm start bật server
var courseApi = 'http://localhost:3000/courses';
// fetch(courseApi)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(course) {
//         // console.log(course)
//     })

// example CRUD

//READ
var list = document.querySelector('#list');

start();

function start() {
    //c1
    // getList(function(courses) {
    //     renderCourse(courses);
    // })
    //c2
    getList(renderCourse)
    handleFrom()
}
// function
function getList(render_course) {
    fetch(courseApi)
        .then(function(response) {
            return response.json()
        })
        //c1
        // .then(function(courses) {
        //     render_course(courses)
        // })
        //c2
        .then(render_course)
}

function renderCourse(courses) {
    var htmls = courses.map(function(course) {
        return `<li onclick="loadData(${course.id})""><h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="deleteCourse(${course.id})" type="button">Xoa</button>
        </li>`
    });
    list.innerHTML = htmls.join('');
}
//set form create
function handleFrom() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var form = {
            name: name,
            description: description,
        }
        createCourse(form, function(data) {
            console.log(data)
                // getList(renderCourse);
        })
    }
}

function createCourse(data, callback) {
    var option = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    console.log(option)
    fetch(courseApi, option)
        .then(function(response) {
            return response.json()
        })
        // .then(function(data) {
        //     return callback(data)
        // })
}

function loadData(id, function_loaddata) {
    fetch(courseApi + "/" + id)
        .then(function(rs) {
            return rs.json();
        })
        .then(function(rs) {
            function_loaddata(rs);
        })
}

function handleLoadData(data) {
    document.querySelector('input[name="id"]').value(data.id);
    document.querySelector('input[name="name"]').value(data.name);
    document.querySelector('input[name="description"]').value(data.description);
}

function handleFormUpdate() {
    var updateBtn = document.querySelector('#update');
    updateBtn.onclick = function() {
        var id = document.querySelector('input[name="id"]').value;
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var form = {
            id: id,
            data: {
                name: name,
                description: description,
            }
        }
        updateCourse(form, function(data) {
            console.log(data)
                // getList(renderCourse);
        })
    }
}


function updateCourse(data) {
    var option = {
        method: 'PUT',
        body: JSON.stringify(data.data),
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(courseApi + "/" + data.id, option)
        .then(function(rs) {
            return rs.json()
        })
}

function deleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    fetch(courseApi + '/' + id, option)
        .then(function(response) {
            response.json()
        })
        .then(callback)
}
document.querySelector('#create').onsubmit = function(e) {
    e.preventDefault();
}