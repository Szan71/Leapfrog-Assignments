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

// Bubble sort
function sortBy(arr, key) {
    // let arr1 = [...arr}; // spread operator -- spreading the value ES6
    let arr1 = [].concat(arr);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr1.length - i - 1); j++) {
            if (arr1[j][key] > arr1[j + 1][key]) {

                var temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
            }
        }
    }
    console.log("Sorted by", key, ":", arr1);
}

var sorted = sortBy(arr, 'name');
console.log("Unsorted array: ", arr);

// sortBy(arr, 'id'); Sorted by id