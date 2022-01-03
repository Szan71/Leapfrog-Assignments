var emulator = document.querySelector('.emulator');

function homeScreen() {
    lockScreen.style.display = 'none';
    passcode.style.display = 'none';
    console.log('This is homescreen!');
    var homescreen = document.createElement("div");
    emulator.appendChild(homescreen);
    homescreen.classList.add("homescreen");
    homescreen.style.background = "url('./images/wallpaper1.jpg') no-repeat center top";
    homescreen.style.backgroundSize = '100%';
    homescreen.style.width = '260px';
    homescreen.style.height = '400px';
    homescreen.style.position = 'absolute';
    homescreen.style.top = '74px';
    homescreen.style.left = '10px';
    homescreen.style.cursor = 'pointer';
    var icons = document.createElement("div");
    icons.style.display = 'flex';
    icons.style.height = '70px';
    icons.style.padding = '10px 0px';
    homescreen.appendChild(icons);
    var icon1 = document.createElement('img');
    var icon2 = document.createElement('img');
    var icon3 = document.createElement('img');
    var icon4 = document.createElement('img');
    icon1.src = "./images/camera.svg";
    icon2.src = "./images/calculator.svg";
    icon3.src = "./images/clock.svg";
    icon4.src = "./images/calendar.svg";
    icons.appendChild(icon1);
    icons.appendChild(icon2);
    icons.appendChild(icon3);
    icons.appendChild(icon4);
    icon1.style.margin = '0px 7px';
    icon2.style.margin = '0px 7px';
    icon3.style.margin = '0px 7px';
    icon4.style.margin = '0px 7px';
    icon1.addEventListener('click', () => {

        console.log('Camera');
        var cameraHome = document.createElement("video");
        homescreen.appendChild(cameraHome);
        cameraInterface();
        cameraHome.style.position = 'absolute';
        cameraHome.style.top = '1px';
    });

    var Hour;
    var Minute;
    var Seconds;

    icon3.addEventListener('click', () => {
        homescreen.style.background = '#E5E5E5';
        icons.style.display = 'none';
        console.log('Clock');
        var clock = document.createElement("div");
        homescreen.appendChild(clock);
        clock.classList.add("clock");
        var clockFace = document.createElement("div");
        clockFace.classList.add("clock-face");
        clock.appendChild(clockFace);
        Hour = document.createElement("div");
        Minute = document.createElement("div");
        Seconds = document.createElement("div");
        Hour.classList.add("hand", "hand-hour");
        Minute.classList.add("hand", "hand-minute");
        Seconds.classList.add("hand", "hand-seconds");
        clockFace.appendChild(Hour);
        clockFace.appendChild(Minute);
        clockFace.appendChild(Seconds);

        var digitalClock = document.createElement("H1");
        clock.appendChild(digitalClock);
        digitalClock.style.color = 'black';
        digitalClock.style.position = 'relative';
        digitalClock.style.textAlign = 'center';
        digitalClock.style.top = '70px';

        var hourHand = document.querySelector('.hand-hour');
        var minuteHand = document.querySelector('.hand-minute');
        var secondHand = document.querySelector('.hand-seconds');

        function getTime() {
            const now = new Date();

            const seconds = now.getSeconds();
            const secondsDegree = (((seconds / 60) * 360) + 90);
            secondHand.style.transform = `rotate(${secondsDegree}deg)`;


            const minutes = now.getMinutes();
            const minutesDegree = (((minutes / 60) * 360) + 90);
            minuteHand.style.transform = `rotate(${minutesDegree}deg)`;


            const hours = now.getHours();
            const hoursDegree = (((hours / 60) * 360) + 90);
            hourHand.style.transform = `rotate(${hoursDegree}deg)`;

            var fullTime = (hours < 10 ? '0' : '') + (hours) + ":" + (minutes < 10 ? '0' : '') + (minutes) + ":" + (seconds < 10 ? '0' : '') + (seconds);
            digitalClock.innerHTML = fullTime;

        }

        setInterval(getTime, 1000);



    });


}