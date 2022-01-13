const emulator = document.querySelector('.emulator');

var rotateDegree = 0;
const rotateButton = document.getElementById('rotatebtn');
rotateButton.addEventListener('click', rotate);

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