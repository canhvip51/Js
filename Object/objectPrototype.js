function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName =function(){
        return `${this.firstName} ${this.lastName}`
    }
}
// Thêm thuộc tính cho object
// Nằm trong _proto của object
// Có thể thêm cả thuộc tính và phương thước
User.prototype.className = 'F8';
User.prototype.getClassName =function(){
    return this.className;
}

User.prototype.setClassName =function(classname){
     this.className=classname;
}

var author = new User('a1','b1','avartar');
var user = new User('a2','b2','avartar');
 console.log(author.getName());
 author.setClassName('Java');
 console.log(author.getClassName());