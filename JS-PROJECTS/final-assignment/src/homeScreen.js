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
    homescreen.style.overflow = 'auto';

    // row 1
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
    icon2.src = "./images/maps.svg";
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

    // camera
    icon1.addEventListener('click', () => {

        console.log('Camera');
        var cameraHome = document.createElement("video");
        homescreen.appendChild(cameraHome);
        cameraInterface();
        cameraHome.style.position = 'absolute';
        cameraHome.style.top = '1px';
    });


    // maps
    icon2.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        var maps = document.createElement("div");
        homescreen.appendChild(maps);
        maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689198518!2d85.29111310543334!3d27.709031933706044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1641204469061!5m2!1sen!2snp" width="260" height="396" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

    });

    // calendar with events
    icon4.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        homescreen.style.background = 'white';

        var calWrap = document.createElement("div");
        homescreen.appendChild(calWrap);
        calWrap.setAttribute("id", "cal-wrap");

        var calDate = document.createElement("div");
        calDate.setAttribute("id", "cal-date");
        calWrap.appendChild(calDate);

        var calMth = document.createElement("select");
        calMth.setAttribute("id", "cal-mth");
        calDate.appendChild(calMth);

        var calYr = document.createElement("select");
        calYr.setAttribute("id", "cal-yr");
        calDate.appendChild(calYr);


        var calContainer = document.createElement("div");
        calContainer.setAttribute("id", "cal-container");
        calWrap.appendChild(calContainer);

        var calEvent = document.createElement("form");
        calEvent.setAttribute("id", "cal-event");
        calWrap.appendChild(calEvent);

        var evtHead = document.createElement("h1");
        evtHead.setAttribute("id", "evt-head");
        calEvent.appendChild(evtHead);

        var evtDate = document.createElement("div");
        evtDate.setAttribute("id", "evt-date");
        calEvent.appendChild(evtDate);

        var evtDetails = document.createElement("textarea");
        evtDetails.setAttribute("id", "evt-details");
        calEvent.appendChild(evtDetails);
        evtDetails.setAttribute("required", "required");

        var evtClose = document.createElement("input");
        evtClose.setAttribute("id", "evt-close");
        calEvent.appendChild(evtClose);
        evtClose.setAttribute("type", "button");
        evtClose.setAttribute("value", "Close");

        var evtDel = document.createElement("input");
        evtDel.setAttribute("id", "evt-del");
        calEvent.appendChild(evtDel);
        evtDel.setAttribute("type", "button");
        evtDel.setAttribute("value", "Delete");

        var evtSave = document.createElement("input");
        evtSave.setAttribute("id", "evt-save");
        calEvent.appendChild(evtSave);
        evtSave.setAttribute("type", "submit");
        evtSave.setAttribute("value", "Save");

        cal.init();

    });


    icon3.addEventListener('click', () => {
        homescreen.style.background = '#091921';
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        console.log('Clock');


        var clock = document.createElement("div");
        homescreen.appendChild(clock);
        clock.classList.add("clock");

        var hour = document.createElement("div");
        hour.classList.add("hour");
        clock.appendChild(hour);
        var hr = document.createElement("div");
        hr.classList.add("hr");
        hr.setAttribute("id", "hr");
        hour.appendChild(hr);


        var min = document.createElement("div");
        min.classList.add("min");
        clock.appendChild(min);
        var mn = document.createElement("div");
        mn.classList.add("mn");
        mn.setAttribute("id", "mn");
        min.appendChild(mn);

        var sec = document.createElement("div");
        sec.classList.add("sec");
        clock.appendChild(sec);
        var sc = document.createElement("div");
        sc.classList.add("sc");
        sc.setAttribute("id", "sc");
        sec.appendChild(sc);

        var digitalClock = document.createElement("H1");
        clock.appendChild(digitalClock);
        digitalClock.style.color = 'white';
        digitalClock.style.position = 'relative';
        digitalClock.style.textAlign = 'center';
        digitalClock.style.top = '160px';

        const deg = 6;
        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            let hours = day.getHours();
            let minutes = day.getMinutes();
            let seconds = day.getSeconds();

            var ampm = hours >= 12 ? 'PM' : 'AM';

            var fullTime = (hours < 10 ? '0' : '') + (hours) + ":" + (minutes < 10 ? '0' : '') + (minutes) + ":" + (seconds < 10 ? '0' : '') + (seconds) + " " + (ampm);
            digitalClock.innerHTML = fullTime;

        });

    });

    var icons_row2 = document.createElement("div");
    icons_row2.style.display = 'flex';
    icons_row2.style.height = '70px';
    icons_row2.style.padding = '10px 0px';
    homescreen.appendChild(icons_row2);
    var icon21 = document.createElement('img');
    var icon22 = document.createElement('img');
    var icon23 = document.createElement('img');
    var icon24 = document.createElement('img');
    icon21.src = "./images/youtube.svg";
    icon22.src = "./images/apple-music.svg";
    icon23.src = "./images/calculator.svg";
    icon24.src = "./images/weather.svg";
    icons_row2.appendChild(icon21);
    icons_row2.appendChild(icon22);
    icons_row2.appendChild(icon23);
    icons_row2.appendChild(icon24);
    icon21.style.margin = '0px 7px';
    icon22.style.margin = '0px 7px';
    icon23.style.margin = '0px 7px';
    icon24.style.margin = '0px 7px';

    icon21.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        var youtube = document.createElement("div");
        homescreen.appendChild(youtube);
        youtube.innerHTML = `<iframe width="260" height="396" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    });



}