var obj1 = {
    brand: "Redmi",
    color: "Red",
};

var obj2 = obj1; //in object this does not copy the value but use as a refrence to it
console.log(obj2);
obj2.color = "Green";
console.log(obj2);

// obj1 = data....
// obj2 = obj1
// obj2 = location reference of obj1
