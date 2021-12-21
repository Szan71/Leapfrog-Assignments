// Write a function that searches for an object by a specific key value in an array of objects


var fruits = [{
    id: 1,
    name: 'Banana',
    color: 'Yellow'
}, {
    id: 2,
    name: 'Apple',
    color: 'Red'
}]

searchByName(fruits, 'Apple');
searchByKey(fruits, 'name', 'Banana');


function searchByName(fruits, nameFruit) {
    fruits.forEach((value, index) => {
        if (value.name === nameFruit) {
            console.log(fruits[index]);
        }
    })
}

function searchByKey(fruits, key, nameFruit) {
    console
    fruits.forEach((value, index) => {
        if (value[key] === nameFruit) {
            console.log(fruits[index]);
        }
    })
}