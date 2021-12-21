// Write a function that transforms an array of inputs into a new array based on a provided transformation function.

var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {
    let arr = [];

    collection.forEach((value) => {
        arr.push(tranFunc(value))
    })

    return arr;
}

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);