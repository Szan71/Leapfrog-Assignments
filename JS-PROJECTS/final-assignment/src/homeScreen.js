var emulator = document.querySelector('.emulator');
// emulator.style.transform = 'rotate(90deg)';

var backBtn = document.createElement('button');
emulator.appendChild(backBtn);
backBtn.setAttribute('id', 'back-button');

function homeScreen() {
    lockScreen.style.display = 'none';
    passcode.style.display = 'none';
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

    backBtn.addEventListener('click', () => {
        let homeScreenDivs = Array.from(document.getElementsByClassName('homescreen'));
        homeScreenDivs.forEach((el) => { el.remove() })
        homeScreen();
    });

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
        cameraHome.style.position = 'absolute';
        cameraHome.style.top = '0px';
        homescreen.appendChild(cameraHome);
        cameraInterface();

    });


    // maps
    icon2.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';
        var maps = document.createElement("div");
        homescreen.appendChild(maps);
        maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689198518!2d85.29111310543334!3d27.709031933706044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1641204469061!5m2!1sen!2snp" width="260" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

    });

    // calendar with events
    icon4.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';
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
        icons_row3.style.display = 'none';
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

            hr.style.transform = `rotateZ(${
        (hh) + (mm / 12)
      }deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            let hours = day.getHours();
            let minutes = day.getMinutes();
            let seconds = day.getSeconds();

            var ampm = hours >= 12 ? 'PM' : 'AM';

            var fullTime = (hours < 10 ? '0' : '') + (hours) + ":" + (
                minutes < 10 ? '0' : ''
            ) + (minutes) + ":" + (
                seconds < 10 ? '0' : ''
            ) + (seconds) + " " + (
                ampm);
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
        icons_row3.style.display = 'none';
        var youtube = document.createElement("div");
        homescreen.appendChild(youtube);
        youtube.innerHTML = `<iframe width="260" height="400" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    });

    icon22.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';

        var player = document.createElement('div');
        player.className = 'player';
        player.style.width = '260px';
        player.style.height = '400px';
        player.style.position = 'absolute';
        player.style.left = '0px';
        homescreen.appendChild(player);

        var audio = new Audio();
        audio.src = './sounds/Peaches.mp3';
        audio.setAttribute("id", "song");
        player.appendChild(audio);

        var container = document.createElement("div");
        container.className = 'container';
        player.appendChild(container);

        var box = document.createElement("div");
        box.className = 'box';
        container.appendChild(box);

        var albumArt = new Image();
        albumArt.src = './images/peaches.jpg';
        albumArt.setAttribute("id", "thumbnail");
        container.appendChild(albumArt);

        var play = new Image();
        play.src = './images/play.png';
        play.setAttribute("id", "play-pause");
        container.appendChild(play);
        play.addEventListener('click', () => {
            playPause();
        });

        var forward = new Image();
        forward.src = './images/forward.png';
        forward.setAttribute("id", "next-song");
        container.appendChild(forward);
        forward.addEventListener('click', () => {
            nextSong();
        });

        var backward = new Image();
        backward.src = './images/backward.png';
        backward.setAttribute("id", "previous-song");
        container.appendChild(backward);
        backward.addEventListener('click', () => {
            previousSong();
        });

        var songArtist = document.createElement("div");
        songArtist.className = 'song-artist';
        songArtist.innerHTMl = 'Justin Beiber';
        container.appendChild(songArtist);

        var songTitle = document.createElement("div");
        songTitle.className = 'song-title';
        songTitle.innerHTMl = 'Peaches';
        container.appendChild(songTitle);

        var input = document.createElement("input");
        container.appendChild(input);
        input.setAttribute("type", "range");
        input.setAttribute("id", "progress-bar");
        input.setAttribute("min", "0");
        input.setAttribute("max", "");
        input.setAttribute("value", "0");
        input.addEventListener('change', () => {
            changeProgressBar();
        });

        var currentTime = document.createElement("div");
        currentTime.className = 'currentTime';
        container.appendChild(currentTime);

        var durationTime = document.createElement("div");
        durationTime.className = 'durationTime';
        container.appendChild(durationTime);

        const thumbnail = document.querySelector('#thumbnail'); // album cover
        const song = document.querySelector('#song'); // audio object

        const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
        let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

        songIndex = 0;
        var songs = ['./sounds/Peaches.mp3', './sounds/STAY.mp3', './sounds/LoveYourself.mp3', './sounds/good4u.mp3']; // object storing paths for audio objects
        var thumbnails = ['./images/peaches.jpg', './images/stay.jpg', './images/peaches.jpg', './images/olivia.jpg']; // object storing paths for album covers and backgrounds
        var songArtists = ['Justin Beiber', 'Justin Beiber', 'Justin Beiber', 'Olivia Rodrigo']; // object storing track artists
        var songTitles = ["Peaches", "Stay", "Love Yourself", "Good 4 U"];
        // object storing track titles

        // function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
        let playing = true;

        function playPause() {
            if (playing) {
                const song = document.querySelector('#song'),
                    thumbnail = document.querySelector('#thumbnail');

                pPause.src = "./images/pause.png"
                thumbnail.style.transform = "scale(1.15)";

                song.play();
                songArtist.innerHTML = songArtists[songIndex];
                songTitle.innerHTML = songTitles[songIndex];

                playing = false;
            } else {
                pPause.src = "./images/play.png"
                thumbnail.style.transform = "scale(1)"

                song.pause();
                playing = true;
            }
        }

        // automatically play the next song at the end of the audio object's duration
        song.addEventListener('ended', function() {
            nextSong();
        });

        // function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
        function nextSong() {
            songIndex++;
            if (songIndex > 3) {
                songIndex = 0;
            };
            song.src = songs[songIndex];
            thumbnail.src = thumbnails[songIndex];

            songArtist.innerHTML = songArtists[songIndex];
            songTitle.innerHTML = songTitles[songIndex];

            playing = true;
            playPause();
        }

        // function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
        function previousSong() {
            songIndex--;
            if (songIndex < 0) {
                songIndex = 3;
            };
            song.src = songs[songIndex];
            thumbnail.src = thumbnails[songIndex];

            songArtist.innerHTML = songArtists[songIndex];
            songTitle.innerHTML = songTitles[songIndex];

            playing = true;
            playPause();
        }

        // update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
        function updateProgressValue() {
            progressBar.max = song.duration;
            progressBar.value = song.currentTime;
            try {
                document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
                if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
                    document.querySelector('.durationTime').innerHTML = "0:00";
                } else {
                    document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
                }
            } catch ($e) {

            }
        };

        // convert song.currentTime and song.duration into MM:SS format
        function formatTime(seconds) {
            let min = Math.floor((seconds / 60));
            let sec = Math.floor(seconds - (min * 60));
            if (sec < 10) {
                sec = `0${sec}`;
            };
            return `${min}:${sec}`;
        };

        // run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
        setInterval(updateProgressValue, 500);

        // function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
        function changeProgressBar() {
            song.currentTime = progressBar.value;
        };

    })

    icon23.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';
        console.log('calculator');

        var calculatorApp = document.createElement("div");
        homescreen.appendChild(calculatorApp);
        calculatorApp.className = 'calculator-app';
        calculatorApp.style.background = 'black';
        calculatorApp.style.height = '400px';
        calculatorApp.style.width = '260px';
        calculatorApp.style.paddingTop = '15px';
        calculatorApp.style.border = 'none';
        calculatorApp.style.background = 'black';
        calculatorApp.style.color = 'white';


        var inputDiv = document.createElement("div");
        calculatorApp.appendChild(inputDiv);
        var inputArea = document.createElement("input");
        inputDiv.appendChild(inputArea);
        inputArea.setAttribute("id", "value");
        inputArea.style.width = "240px";
        inputArea.style.border = 'none';
        inputArea.style.background = 'black';
        inputArea.style.color = 'white';
        inputArea.style.textAlign = 'right';

        var values = [
            ['C', '^2', '^3', '÷'],
            ['7', '8', '9', 'x'],
            ['4', '5', '6', '+'],
            ['1', '2', '3', '-'],
            ['.', '0', '%', '=']
        ];


        for (let i = 0; i < 5; i++) {
            var buttons = document.createElement("div");
            buttons.className = 'buttons';
            calculatorApp.appendChild(buttons);
            for (let j = 0; j < 4; j++) {
                var input = document.createElement('input');
                buttons.appendChild(input);
                input.setAttribute("type", "submit");
                input.setAttribute("value", values[i][j]);
                input.setAttribute('onClick', "set(this)");
                if (values[i][j] == '÷' || values[i][j] == 'x' || values[i][j] == '+' || values[i][j] == '-' || values[i][j] == '=') {
                    input.style.background = '#fe9505';
                }

                if (values[i][j] == 'C' || values[i][j] == '^2' || values[i][j] == '^3') {
                    input.style.background = '#a5a5a5';
                    input.style.color = 'black';
                }

            }
        }

    });

    icon24.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';

        var weatherApp = document.createElement('div');
        weatherApp.className = 'weatherApp';
        weatherApp.style.width = '260px';
        weatherApp.style.height = '400px';
        weatherApp.style.position = 'absolute';
        weatherApp.style.left = '0px';
        weatherApp.style.background = 'black';
        homescreen.appendChild(weatherApp);

        var weatherForm = document.createElement('form');
        weatherForm.setAttribute('id', 'form');
        weatherApp.appendChild(weatherForm);

        var weatherInput = document.createElement('input');
        weatherForm.appendChild(weatherInput);
        weatherInput.setAttribute('type', 'text');
        weatherInput.setAttribute('id', 'search');
        weatherInput.setAttribute('placeholder', 'Search by location');
        weatherInput.setAttribute('autocomplete', 'off');


        var weatherMain = document.createElement('main');
        weatherApp.appendChild(weatherMain);
        weatherMain.setAttribute('id', 'main');

        const apiKey = "5716b71f47305d867f16fe7d50244c20";
        const main = document.getElementById('main');
        const form = document.getElementById('form');
        const search = document.getElementById('search');
        const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(
        //     res => console.log(res)
        // );

        async function getWeatherByLocation(city) {
            const resp = await fetch(url(city), {
                origin: "cros"
            });
            const respData = await resp.json();
            addWeatherToPage(respData);
        }

        function addWeatherToPage(data) {
            const temp = Ktoc(data.main.temp);
            const weather = document.createElement('div')
            weather.classList.add('weather');
            weather.innerHTML = `  
      <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>  
      <small>${data.weather[0].main}</small>  
      `;
            //  cleanup   
            main.innerHTML = "";
            main.appendChild(weather);
        };

        function Ktoc(K) {
            return Math.floor(K - 273.15);
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const city = search.value;
            if (city) {
                getWeatherByLocation(city)
            }
        });
    });

    var icons_row3 = document.createElement("div");
    icons_row3.style.display = 'flex';
    icons_row3.style.height = '70px';
    icons_row3.style.padding = '10px 0px';
    homescreen.appendChild(icons_row3);
    var icon31 = document.createElement('img');
    var icon32 = document.createElement('img');
    var icon33 = document.createElement('img');
    var icon34 = document.createElement('img');
    icon31.src = "./images/notes.svg";
    icon32.src = "./images/clips.svg";
    icon33.src = "./images/photos.svg";
    icon34.src = "./images/photos.svg";
    icons_row3.appendChild(icon31);
    icons_row3.appendChild(icon32);
    icons_row3.appendChild(icon33);
    icons_row3.appendChild(icon34);
    icon31.style.margin = '0px 7px';
    icon32.style.margin = '0px 7px';
    icon33.style.margin = '0px 7px';
    icon34.style.margin = '0px 7px';

    icon31.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';

        var memoApp = document.createElement('div');
        memoApp.className = 'memo-app';
        memoApp.style.width = '260px';
        memoApp.style.height = '400px';
        memoApp.style.position = 'absolute';
        memoApp.style.left = '0px';
        homescreen.appendChild(memoApp);

        var memoSection = document.createElement('section');
        memoSection.className = 'note';
        memoApp.appendChild(memoSection);

        var memoInput = document.createElement('input');
        memoSection.appendChild(memoInput);
        memoInput.setAttribute('type', 'text');
        memoInput.setAttribute('placeholder', 'Title');
        memoInput.setAttribute('id', 'title');
        memoInput.setAttribute('value', '');
        memoInput.addEventListener('change', saveTitle);

        var memoTextarea = document.createElement('textarea');
        memoSection.appendChild(memoTextarea);
        memoTextarea.setAttribute('placeholder', 'Type a note here...');
        memoTextarea.setAttribute('id', 'message');
        memoTextarea.addEventListener('change', saveMessage);
        memoTextarea.innerHtml = 'Type a note here...';

        var test = document.createElement('div');
        test.setAttribute('id', 'test');

        function saveTitle() {
            //Make sure local storage is supported by the browser.
            if (typeof(Storage) !== 'undefined') {
                //Get title value
                var input = document.getElementById('title').value;

                //Save title to local Storage
                localStorage.setItem('title', input);
                document.getElementById('title').value = localStorage.getItem('title');

                //Test
                console.log('Title saved.')
                    //document.getElementById('test').innerHTML = localStorage.getItem('title')

            } else { //Throw an error if browser doesn't support local storage
                document.getElementById('test').innerHTML('Sorry, your browser does not support Web Storage...')
            }

        }
        //Get the value of the title from local storage.
        document.getElementById('title').value = localStorage.getItem('title')



        //Save note message
        function saveMessage() {
            if (typeof(Storage) != 'undefined') {
                //Get value of the message
                var messageInput = document.getElementById('message').value;

                //Save the value in local storage.
                localStorage.setItem('message', messageInput);
                document.getElementById('message').value = localStorage.getItem('message')

                //Test
                console.log('Message saved.')
                    //document.getElementById('test').innerHTML = localStorage.getItem('message')

            } else { //Throw an error if browser doesn't support local storage
                document.getElementById('test').innerHTML('Sorry, your browser does not support Web Storage...')
            }

        }

        //Get the value of the message from local storage
        document.getElementById('message').value = localStorage.getItem('message')



    });

    icon32.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';

        var videoApp = document.createElement('div');
        videoApp.className = 'video-player';
        videoApp.style.width = '260px';
        videoApp.style.height = '400px';
        videoApp.style.position = 'absolute';
        videoApp.style.left = '0px';
        videoApp.style.background = 'black';
        homescreen.appendChild(videoApp);

        var videoPlayer = document.createElement('video');
        videoApp.appendChild(videoPlayer);
        videoPlayer.setAttribute('id', 'my-Player');
        videoPlayer.className = 'Player-js';
        videoPlayer.setAttribute('controls', '');
        videoPlayer.setAttribute('preload', 'auto');
        videoPlayer.setAttribute('poster', 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg');
        videoPlayer.setAttribute('data-setup', '');
        videoPlayer.setAttribute('loop', '');
        videoPlayer.style.width = '260px';
        videoPlayer.style.height = '400px';


        var videoSource = document.createElement('source');
        videoPlayer.appendChild(videoSource);
        videoSource.setAttribute('src', 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4')
        videoSource.setAttribute('type', 'video/mp4');
    });

    icon33.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';

        var photoApp = document.createElement('div');
        photoApp.style.width = '260px';
        photoApp.style.height = '400px';
        photoApp.style.position = 'absolute';
        photoApp.style.left = '0px';
        photoApp.style.background = 'black';
        homescreen.appendChild(photoApp);

        var carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';
        photoApp.appendChild(carouselContainer);

        var navigation = document.createElement('div');
        navigation.className = 'navigation';
        carouselContainer.appendChild(navigation);

        var prev = document.createElement('div');
        prev.classList.add('prev', 'nav-btn');
        navigation.appendChild(prev);

        var next = document.createElement('div');
        next.classList.add('next', 'nav-btn');
        navigation.appendChild(next);

        var carousel = document.createElement('div');
        carousel.className = 'carousel';
        carouselContainer.appendChild(carousel);

        // item1
        var item1 = document.createElement('div');
        item1.classList.add('item', 'main-item');
        carousel.appendChild(item1);

        var img = document.createElement('img');
        img.src = './images/image1.jpg';
        item1.appendChild(img);

        var caption = document.createElement('div');
        caption.className = 'caption';
        caption.innerHTML = 'Image 1';
        item1.appendChild(caption);

        // item2
        var item2 = document.createElement('div');
        item2.className = 'item';
        carousel.appendChild(item2);

        var img2 = document.createElement('img');
        img2.src = './images/image2.jpg';
        item2.appendChild(img2);

        var caption2 = document.createElement('div');
        caption2.className = 'caption';
        caption2.innerHTML = 'Image 2';
        item2.appendChild(caption2);

        // item3
        var item3 = document.createElement('div');
        item3.className = 'item';
        carousel.appendChild(item3);

        var img3 = document.createElement('img');
        img3.src = './images/image3.jpg';
        item3.appendChild(img3);

        var caption3 = document.createElement('div');
        caption3.className = 'caption';
        caption3.innerHTML = 'Image 3';
        item3.appendChild(caption3);

        const images = document.querySelector('.carousel').children;
        console.log(images);
        const totalImages = images.length;
        let index = 0;

        prev.addEventListener('click', () => {
            nextImage('next');
        })

        next.addEventListener('click', () => {
            nextImage('prev');
        })

        function nextImage(direction) {
            if (direction == 'next') {
                index++;
                if (index == totalImages) {
                    index = 0;
                }
            } else {
                if (index == 0) {
                    index = totalImages - 1;
                } else {
                    index--;
                }
            }

            for (let i = 0; i < images.length; i++) {
                images[i].classList.remove('main-item');
            }
            images[index].classList.add('main-item');
        }
    });

    icon34.addEventListener('click', () => {
        icons.style.display = 'none';
        icons_row2.style.display = 'none';
        icons_row3.style.display = 'none';

        var pencilApp = document.createElement('div');
        pencilApp.className = 'pencil-app';
        pencilApp.style.width = '260px';
        pencilApp.style.height = '400px';
        pencilApp.style.position = 'absolute';
        pencilApp.style.left = '0px';
        pencilApp.style.background = 'white';
        homescreen.appendChild(pencilApp);

        var canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.style.height = '400px';
        canvas.style.width = '260px';
        pencilApp.appendChild(canvas);

        var toolBox = document.createElement('div');
        toolBox.className = 'toolbox';
        pencilApp.appendChild(toolBox);

        var decreaseBtn = document.createElement('button');
        decreaseBtn.setAttribute('id', 'decrease');
        toolBox.appendChild(decreaseBtn);
        decreaseBtn.innerHTML = '-';

        var sizeSpan = document.createElement('span');
        sizeSpan.setAttribute('id', 'size');
        toolBox.appendChild(sizeSpan);
        sizeSpan.innerHTML = '10';

        var increaseBtn = document.createElement('button');
        increaseBtn.setAttribute('id', 'increase');
        toolBox.appendChild(increaseBtn);
        increaseBtn.innerHTML = '+';

        var colorInput = document.createElement('input');
        colorInput.setAttribute('type', 'color');
        colorInput.setAttribute('id', 'color');
        toolBox.appendChild(colorInput);

        var clearBtn = document.createElement('button');
        clearBtn.setAttribute('id', 'clear');
        toolBox.appendChild(clearBtn);
        clearBtn.innerHTML = 'X';

        const sizeEL = document.getElementById('size');
        const colorEl = document.getElementById('color');
        const clearEl = document.getElementById('clear');

        const ctx = canvas.getContext('2d');

        let size = 10
        let isPressed = false
        let color = 'black'
        let x
        let y

        canvas.addEventListener('mousedown', (e) => {
            isPressed = true

            x = e.offsetX
            y = e.offsetY
        })

        canvas.addEventListener('mouseup', (e) => {
            isPressed = false

            x = undefined
            y = undefined
        })

        canvas.addEventListener('mousemove', (e) => {
            if (isPressed) {
                const x2 = e.offsetX
                const y2 = e.offsetY

                drawCircle(x2, y2)
                drawLine(x, y, x2, y2)

                x = x2
                y = y2
            }
        })

        function drawCircle(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fillStyle = color
            ctx.fill()
        }

        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.strokeStyle = color
            ctx.lineWidth = size * 2
            ctx.stroke()
        }

        function updateSizeOnScreen() {
            sizeEL.innerText = size
        }

        increaseBtn.addEventListener('click', () => {
            size += 5

            if (size > 50) {
                size = 50
            }

            updateSizeOnScreen()
        })

        decreaseBtn.addEventListener('click', () => {
            size -= 5

            if (size < 5) {
                size = 5
            }

            updateSizeOnScreen()
        })

        colorEl.addEventListener('change', (e) => color = e.target.value)

        clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

    });



















}