const emulator = document.querySelector('.emulator');

let rotateDegree = 0;
document.getElementById('rotatebtn').addEventListener('click', rotate);

function rotate() {
    if (rotateDegree > 360) {
        rotateDegree = 90;
    }
    rotateDegree = rotateDegree + 90
    emulator.style.transform = `rotate(${rotateDegree}deg)`;
}

const backBtn = document.createElement('button');
emulator.appendChild(backBtn);
backBtn.setAttribute('id', 'back-button');

document.getElementById('lock').addEventListener('click', () => {
    document.location.reload();
});