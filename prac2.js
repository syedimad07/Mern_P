// Max and min values in array

var arr = [10, 20, 30, 40, 50];

var max = arr[0];
var min = arr[0];

for (var i =0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Max: ", max, "Min: ", min);