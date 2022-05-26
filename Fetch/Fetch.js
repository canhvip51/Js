// API (Application programing interface) cổng giao tiếp của phần mềm
//Backen -> API(ỦL) -> Fetch -> JSON/XML
//->JSON.Parse -> Javascript types
//Render ra giao diện với HTML
var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
    .then(function(response) {
        // console.log(response)
        return response.json();
    })
    .then(function(posts) {
        // console.log(posts)
        var htmls = posts.map(function(post) {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        // document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log(err)
    })
    // HƯớng dấn dùng json server để tạo api
    // b1. Tạo thư mục chứa npm
    //b2.Vào thư mục cd json_server 
    //b3. npm init để tạo tên gói package
    //b4. npm i json-server cài đặt gói 
    //b5. tạo file db.json chứa dữ liệu fake
    //b6. Thêm "start": "json-server -p 3000 --watch db.json" dưới script của file package.json
    //b5 . npm start bật server
var courseApi = 'http://localhost:3000/courses';
fetch(courseApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(course) {
        console.log(course)
    })