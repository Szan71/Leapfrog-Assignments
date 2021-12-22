// Write a program to normalize a given input to get the expected output.
// https://gist.github.com/nishanbajracharya/8fe38807b3ad074a7da2072c7b8e701b

var output = {};
var input = {
    '1': {
        id: 1,
        name: 'John',
        children: [
            { id: 2, name: 'Sally' },
            { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
        ]
    },
    '5': {
        id: 5,
        name: 'Mike',
        children: [{ id: 6, name: 'Peter' }]
    }
};


processFunction(input);
console.log(output);


function processFunction(input) {
    for (let obj in input) {

        output[Object.keys(output).length] = { id: input[obj]['id'], name: input[obj]['name'] }

        if (input[obj]['children'].length > 0) {
            manageChildren(input[obj]['children'], Object.keys(output).length)
        }
    }
}

function manageChildren(arrayData, index) {
    arrayData.forEach(i => {

        output[Object.keys(output).length] = { id: i['id'], name: i['name'] }


        if (!output[index - 1]['children']) {
            output[index - 1]['children'] = [];
        }
        output[index - 1]['children'].push(i['id']);


        if (i['children'] && i['children'].length > 0) {
            manageChildren(i['children'], Object.keys(output).length)
        }
    });
}