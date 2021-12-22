const element1 = document.getElementById('box2');
element1.innerHTML = "<h1>Click the circle!</h1>";

const circle = document.createElement("div");
circle.style.width = "80px";
circle.style.height = "80px";
circle.style.borderRadius = "40px";
circle.style.background = "#47a";

circle.addEventListener('click', () => {
    circle.style.width = "160px";
    circle.style.height = "160px";
    circle.style.borderRadius = "80px";
    circle.style.background = "green";
})

element1.appendChild(circle);