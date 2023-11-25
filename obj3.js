/*
var animal = {
    isHuman : false,
    name : "Monkey",
    makeSound : function(){
        console.log("Unspecified");
    },
};

var monkey = Object.create(animal);
console.log(monkey.name); */

var mobile = Object.create(
    {},
    {
        brand : {value : "Apple", writable: true, enumerable : true},//if you dont want writable prperty descripter to change values change it to false
        model : {value : "Iphone 13", enumerable : true},
        price : {value : "69,990", enumerable : true}
    }
);
//writable allows us to reasign some values 
//enumerable allows us to print property and value 
mobile.brand = "Samsung";
console.log(mobile);