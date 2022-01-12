const lockScreen = document.querySelector(".phone");
const dateTime = document.querySelector(".date-time");
const lockscreenBottom = document.querySelector(".lockscreen-bottom");
const passcode = document.querySelector(".passcode");
const cameraBtn = document.querySelectorAll('.lockscreen-bottom-right');

lockScreen.addEventListener("click", () => {
    dateTime.style.display = 'none';
    lockscreenBottom.style.display = 'none';
    lockScreen.style.filter = 'blur(4px)';
    passcode.style.display = 'block';
    passcode.style.filter = 'blur(0px)';
});

cameraBtn[0].addEventListener("click", (event) => {
    event.stopPropagation();
    var flashlight = document.createElement("div");
    lockScreen.appendChild(flashlight);
    flashlight.style.background = "white";
    flashlight.style.height = '400px';
    flashlight.style.width = '260px';
    flashlight.style.position = 'absolute';
    flashlight.style.top = '1px';
    backBtn.addEventListener('click', () => {
        let lockScreenDivs = Array.from(document.getElementsByClassName('phone'));
        lockScreenDivs.forEach((el) => { el.remove() })
        document.location.reload();
    });

});

cameraBtn[1].addEventListener("click", (event) => {
    event.stopPropagation();

    var camera = document.createElement("video");
    lockScreen.appendChild(camera);

    camera.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    camera.style.position = 'absolute';
    camera.style.top = '1px';

    cameraInterface();
    backBtn.addEventListener('click', () => {
        let lockScreenDivs = Array.from(document.getElementsByClassName('phone'));
        lockScreenDivs.forEach((el) => { el.remove() })
        document.location.reload();
    });
});