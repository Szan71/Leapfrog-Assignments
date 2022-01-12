const pwd = [];
var num;

function passCheck($event) {
    var audio1 = new Audio('./sounds/passcode.mp3');
    audio1.play();

    const value = parseInt($event.value);

    const cipher = salt => {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

        return text => text.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    }

    // To create a cipher
    const myCipher = cipher('mySecretSalt')

    //Then cipher any text:
    console.log(+myCipher('0000'));



    if (pwd.length < 4) {

        pwd.push(value);
        num = +pwd.join("");
        if (num === 0000) {
            var audio = new Audio('./sounds/unlock.mp3');
            audio.play();
            homeScreen();
        }
    }
}