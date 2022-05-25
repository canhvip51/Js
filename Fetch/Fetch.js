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
            </li>`
        });
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        console.log(err)
    })