function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName =function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('a1','b1','avartar');
var user = new User('a2','b2','avartar')
 console.log(author.getName())