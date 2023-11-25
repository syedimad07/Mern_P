//Class Properties
class Message{    msg() {
      console.log("Message Sent!");
    }
  }
  
  class User extends Message {
    constructor(nm, cls, loc, active) {
      super();
      this.name = nm;
      this.class = cls;
      this.location = loc;
      this.isActive = active;
    }
  
    greet() {
      console.log("Hello " + this.name + "!");
    }
  
    msg() {
      console.log("Message Sent to " + this.name + "!");
    }
  }
  
  const usr1 = new User("Imad", "MERN", "Tolichowki", true);
  
  console.log(usr1);
  
  usr1.greet();
  usr1.msg();
  
  usr1.name = "Syed";
  console.log(usr1);