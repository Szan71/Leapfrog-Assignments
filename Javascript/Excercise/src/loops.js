// Write a function to render the following pattern in the console:
// * * * * *
// * * * *
// * * *
// * * 
// *

let string = "";
for (var i = 5; i >= 1; i--) {
    for (var j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);