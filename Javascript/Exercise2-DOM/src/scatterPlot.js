// Render a scatter plot based on an array of coordinates. Create the container for the plot and create each point using javascript.


const myElement = document.getElementById('box');

var points = [
    { x: 10, y: 20 },
    { x: 40, y: 40 },
    { x: 60, y: 20 },
    { x: 11, y: 22 },
    { x: 140, y: 33 },
    { x: 266, y: 100 },
    { x: 10, y: 330 },
    { x: 441, y: 415 },
    { x: 60, y: 260 },
    { x: 414, y: 177 },
    { x: 89, y: 9 },
    { x: 66, y: 21 }
];

console.log(points);

for (let obj in points) {
    const point = document.createElement("div");
    point.style.width = "10px";
    point.style.height = "10px";
    point.style.borderRadius = "5px"
    point.style.position = "absolute";
    point.style.top = points[obj].y + "px";
    point.style.left = points[obj].x + "px";
    point.style.background = "#47a";

    myElement.append(point);
}