function User(nm, cls, loc, active) {
    
this.name = nm;
this.class = cls;
this.location = loc;
this.isActive = active;

this.greet = function(){
    console.log("helloworld");
};
}

User.prototype.call = function (){
    console.log("calling!")
}

const usr1 = new User("Syed", "Mern", "Hyd", true);
const usr2 = new User("sayed", "React", "Udg", false);

//usr1.call(); /calling!

console.log(usr1.call());
