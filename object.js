//objects
//primitive and non prmitive data types

var mobile = {
    "brand name" : "apple",
     Model : "13Pro",
     color : "Red"
     
};
//   brand is a keyname : "apple" is a value
console.log(mobile); //Result = 'brand name': 'apple', Model: '13Pro', color: 'Red'

//Accesing perticular property of object 
console.log(mobile.Model); //Result = 13Pro

//accesing through key name 
console.log(mobile["color"]); //Result = Red

//printing two or more value
console.log(mobile["brand name"], mobile.Model); //Result = apple 13Pro