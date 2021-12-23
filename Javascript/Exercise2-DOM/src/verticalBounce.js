// Render a circle that moves vertically and bounces back into another direction.


function move() {
    const element = document.getElementById("box1");
    const ball = document.createElement("div");

    let top = 0;
    const id = setInterval(frame, 10);

    let direction = 1;

    function frame() {
        ball.style.width = "50px";
        ball.style.height = "50px";
        ball.style.borderRadius = "40px"
        ball.style.position = "absolute";
        ball.style.left = '50%';
        ball.style.background = "#47a";
        if (top == 447) {
            direction = -1;
        } else if (top == 0) {
            direction = 1;
        }
        top += direction;
        ball.style.top = top + 'px';
        console.log(top);
        element.append(ball);
    }
}

move();