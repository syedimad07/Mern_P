//Object in constructor function

function User(nm, cls, loc, active){
    this.name = nm;
    this.class = cls;
    this.location = loc;
    this.isActive = active;
}

const user1 = new User("Syed I", "MernFullStack", "Udgir", "True");
const user2 = new User("Adnan", "DBMS", "Osmanabad", "True");
const user3 = new User("Zaid", "AiDevOp", "Pune", "False");
const user4 = new User("Zishan", "JavaDeveloper", "Hyderabad", "True");

console.log(user1, user2, user3, user4);