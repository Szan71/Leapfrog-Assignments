const lockScreen = document.querySelector(".phone");
const dateTime = document.querySelector(".date-time");
const lockscreenBottom = document.querySelector(".lockscreen-bottom");
const passcode = document.querySelector(".passcode");
const cameraBtn = document.querySelectorAll('.lockscreen-bottom-right');

lockScreen.addEventListener("click", () => {
    console.log('Hello');
    dateTime.style.display = 'none';
    lockscreenBottom.style.display = 'none';
    lockScreen.style.filter = 'blur(4px)';
    passcode.style.display = 'block';
    passcode.style.filter = 'blur(0px)';
});

cameraBtn[0].addEventListener("click", (event) => {
    event.stopPropagation();
    console.log('Flashlight!');
    lockScreen.style.background = "white";

});

cameraBtn[1].addEventListener("click", (event) => {
    event.stopPropagation();
    console.log('Camera!');

    var camera = document.createElement("video");
    lockScreen.appendChild(camera);

    camera.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    camera.style.position = 'absolute';
    camera.style.top = '1px';

    cameraInterface();
});