const pwd = [];
var num;

function set($event) {
    var audio1 = new Audio('./sounds/passcode.mp3');
    audio1.play();

    const value = parseInt($event.value);

    if (pwd.length < 4) {

        pwd.push(value);
        num = +pwd.join("");
        if (num === 0000) {
            var audio = new Audio('./sounds/unlock.mp3');
            audio.play();
            homeScreen();
            console.log('Hello! Sujan');
        }
    }
}