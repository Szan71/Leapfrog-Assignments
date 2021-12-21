// Write a program to sort an array of object by a target key. The original array should remain unchanged.

var arr = [{
    id: 1,
    name: 'John'
}, {
    id: 2,
    name: 'Mary'
}, {
    id: 3,
    name: 'Andrew'
}];

console.log(arr);

// Bubble sort
function sortBy(arr, key) {
    let arr1 = [...arr]; // spread operator -- spreading the value 
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            console.log(arr[j][key]);
            if (arr[j][key] > arr[j + 1][key]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr1);
}


var sorted = sortBy(arr, 'name');