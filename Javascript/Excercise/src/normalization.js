// Write a program to normalize a given input to get the expected output.
// https://gist.github.com/nishanbajracharya/8fe38807b3ad074a7da2072c7b8e701b

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

// function normalize(parent) {
//     if (parent && parent.children) {
//         for (var i = 0, l = parent.children.length; i < l; ++i) {
//             var child = parent.children[i];
//             child.index = i;
//             if (!child.parentId) child.parentId = parent.id || '0';
//             normalize(child);
//         }
//     }
//     console.log(parent);
// }

function runRecursive(data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var current = data[i];

        parentid = current.id == null ? '0' : current.id;
        current.index = i;
        if (current.children && current.children.length > 0) {
            runRecursive(current.children);
        };
    };
};

var answer = runRecursive(input.children);
console.log(answer);