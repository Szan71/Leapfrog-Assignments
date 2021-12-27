let ball1;
let ball2;
let balls;

/**
 * function initializing
 */

function init() {
    balls = [];

    for (var i = 0; i < 1000; i++) {
        let radius = 10;
        let x = Math.random() * innerWidth - radius * 2;
        let y = Math.random() * innerHeight;

        if (i != 0) {
            for (var j = 0; j < balls.length; j++) {

                if (getDistance(x, y, balls[j].positionX, balls[j].positionY) - radius * 2 < 0) {
                    x = Math.random() * innerWidth;
                    y = Math.random() * innerHeight;
                    j = -1;
                }
            }
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }
        let color = colorGenerator();
        // Convenient for 10 balls
        // balls.push(new Ball(x, y, getRandomInt(10, 30), color)); 

        balls.push(new Ball(x, y, getRandomInt(1, 15), color));
    }


}

/**
 * function to change the position of ball
 */
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.update(balls);
    });
}

init();
animate();