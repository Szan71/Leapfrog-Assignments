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
    icons.className = 'icon-set';
    icons.style.display = 'flex';
    icons.style.height = '70px';
    icons.style.flexWrap = 'wrap';
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

    // row2
    var icon21 = document.createElement('img');
    var icon22 = document.createElement('img');
    var icon23 = document.createElement('img');
    var icon24 = document.createElement('img');
    icon21.src = "./images/youtube.svg";
    icon22.src = "./images/apple-music.svg";
    icon23.src = "./images/calculator.svg";
    icon24.src = "./images/weather.svg";
    icons.appendChild(icon21);
    icons.appendChild(icon22);
    icons.appendChild(icon23);
    icons.appendChild(icon24);

    // row3
    var icon31 = document.createElement('img');
    var icon32 = document.createElement('img');
    var icon33 = document.createElement('img');
    var icon34 = document.createElement('img');
    icon31.src = "./images/notes.svg";
    icon32.src = "./images/clips.svg";
    icon33.src = "./images/photos.svg";
    icon34.src = "./images/pencil.png";
    icons.appendChild(icon31);
    icons.appendChild(icon32);
    icons.appendChild(icon33);
    icons.appendChild(icon34);

    // Row4
    var icon41 = document.createElement('img');
    var icon42 = document.createElement('img');
    var icon43 = document.createElement('img');
    icon41.src = "./images/flappy.png";
    icon42.src = "./images/target.svg";
    icon43.src = "./images/appreciation.svg";
    icons.appendChild(icon41);
    icons.appendChild(icon42);
    icons.appendChild(icon43);

    // camera
    icon1.addEventListener('click', camera);

    function camera() {
        console.log('Camera');
        var cameraHome = document.createElement("video");
        cameraHome.style.position = 'absolute';
        cameraHome.style.top = '0px';
        homescreen.appendChild(cameraHome);
        cameraInterface();
    }

    // maps
    icon2.addEventListener('click', map);

    function map() {
        icons.style.display = 'none';
        var maps = document.createElement("div");
        homescreen.appendChild(maps);
        maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689198518!2d85.29111310543334!3d27.709031933706044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1641204469061!5m2!1sen!2snp" width="260" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }


    // calendar with events
    icon4.addEventListener('click', calendar);

    function calendar() {
        icons.style.display = 'none';
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
    };


    //Analog Clock
    icon3.addEventListener('click', analogClock);

    function analogClock() {
        // homescreen.style.background = '#091921';
        icons.style.display = 'none';
        console.log('Clock');

        var clockApp = document.createElement('div');
        clockApp.id = 'clock-app';
        homescreen.appendChild(clockApp);
        clockApp.style.background = '#091921';
        clockApp.style.height = '400px';
        clockApp.style.width = '260px';
        clockApp.style.position = 'absolute';


        var clock = document.createElement("div");
        clockApp.appendChild(clock);
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
        clockApp.appendChild(digitalClock);
        digitalClock.style.color = 'white';
        digitalClock.style.position = 'relative';
        digitalClock.style.textAlign = 'center';
        digitalClock.style.top = '50px';

        const deg = 6;
        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
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

    };


    // Youtube
    icon21.addEventListener('click', youtubeApp);

    function youtubeApp() {
        icons.style.display = 'none';
        var youtube = document.createElement("div");
        homescreen.appendChild(youtube);
        youtube.innerHTML = `<iframe width="260" height="400" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    };

    // Music Player
    icon22.addEventListener('click', musicPlayer);

    function musicPlayer() {
        icons.style.display = 'none';

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

    };


    //    Calculator 
    icon23.addEventListener('click', calculator);

    function calculator() {
        icons.style.display = 'none';

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

    };


    // Weather app
    icon24.addEventListener('click', weather);

    function weather() {
        icons.style.display = 'none';

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
    };

    // Notes App
    icon31.addEventListener('click', notes);

    function notes() {
        icons.style.display = 'none';

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

    };


    // Video Player
    icon32.addEventListener('click', videoPlayer);

    function videoPlayer() {
        icons.style.display = 'none';

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
        videoSource.src = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4';
        videoSource.setAttribute('type', 'video/mp4');
    };

    // Photo Viewer
    icon33.addEventListener('click', photoViewer);

    function photoViewer() {
        icons.style.display = 'none';

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
        prev.innerHTML = '<';

        var next = document.createElement('div');
        next.classList.add('next', 'nav-btn');
        navigation.appendChild(next);
        next.innerHTML = ">";

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
    };

    // Doodle App
    icon34.addEventListener('click', doodleApp);

    function doodleApp() {
        icons.style.display = 'none';

        var pencilApp = document.createElement('div');
        pencilApp.className = 'pencil-app';
        pencilApp.style.width = '260px';
        pencilApp.style.height = '400px';
        pencilApp.style.position = 'absolute';
        pencilApp.style.left = '0px';
        pencilApp.style.background = 'white';
        homescreen.appendChild(pencilApp);

        var penCanvas = document.createElement('canvas');
        penCanvas.setAttribute('id', 'canvas');
        penCanvas.style.height = '400px';
        penCanvas.style.width = '260px';
        penCanvas.style.border = '2px solid steelblue';
        pencilApp.appendChild(penCanvas);

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

        penCanvas.addEventListener('mousedown', (e) => {
            isPressed = true

            x = e.offsetX
            y = e.offsetY
        })

        penCanvas.addEventListener('mouseup', (e) => {
            isPressed = false

            x = undefined
            y = undefined
        })

        penCanvas.addEventListener('mousemove', (e) => {
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

    };


    // Flappy Bird
    icon41.addEventListener('click', flappyBirdApp)

    function flappyBirdApp() {
        icons.style.display = 'none';

        var flappyBird = document.createElement('div');
        flappyBird.className = 'flappy-bird';
        flappyBird.style.width = '260px';
        flappyBird.style.height = '400px';
        flappyBird.style.position = 'absolute';
        flappyBird.style.left = '0px';
        flappyBird.style.background = 'white';
        homescreen.appendChild(flappyBird);

        var sprites = document.createElement('img');
        sprites.src = "./images/sprites.png";
        flappyBird.appendChild(sprites);
        sprites.style.display = 'none';

        var flappyCanvas = document.createElement('canvas');
        flappyCanvas.setAttribute('id', 'canvas');
        flappyBird.appendChild(flappyCanvas);
        flappyCanvas.style.margin = 'auto';
        flappyCanvas.style.border = '1px solid black';
        flappyCanvas.style.display = 'none';


        var beforeStart = document.createElement('div');
        beforeStart.className = 'before-start';
        flappyBird.appendChild(beforeStart);

        var bgImg = document.createElement('img');
        bgImg.src = "./images/bg.png";
        bgImg.setAttribute('alt', 'imageBackground');
        beforeStart.appendChild(bgImg);

        var btnImg = document.createElement('img');
        btnImg.src = "./images/play-button.svg";
        btnImg.setAttribute('alt', 'Start Button');
        btnImg.className = 'start-button';
        beforeStart.appendChild(btnImg);


        var instructionP1 = document.createElement('p');
        beforeStart.appendChild(instructionP1);
        instructionP1.setAttribute('id', 'instruction');
        instructionP1.innerHTML = 'PLAY';

        var afterCrash = document.createElement('div');
        afterCrash.className = 'after-crash';
        flappyBird.appendChild(afterCrash);

        var displayScore = document.createElement('div');
        displayScore.className = 'display-score';
        afterCrash.appendChild(displayScore);
        displayScore.innerHTML = `<h4>Score: </h4>
        <p id="score"></p>
        <h4>High Score: </h4>
        <p id="high-score"></p>`;

        var restart = document.createElement('p');
        restart.className = 'restart-instruction';
        restart.innerHTML = 'Touch anywhere to Re-Start the Game';
        afterCrash.appendChild(restart);

        //list of all the constants

        const CANVAS_WIDTH = 260; //Width of our canvas
        const CANVAS_HEIGHT = 400; //Height of our canvas
        const FLAPPING = 5; //to move at 7 frame/sec
        const W = 288,
            H = 400; //Playground Width and Height
        const BIRD_WIDTH = 34; //Bird Width
        const BIRD_HEIGHT = 26; //Bird Height
        const PIPE_WIDTH = 52; //Our Pipe Width 
        const GRAVITY = -0.2; //the speed at the which bird flew down
        const SPEED = 2.0; //speed at which it move
        const PIPE_SPACING = 100; //space adjacent pipes
        const TWO_PIPE_HEIGHT_DIFF = 100; //difference in shape between top and down pipe

        // playground
        /**
         * The PlayGround Class Where player will begin playing flappy bird
         */

        class PlayGround {

            constructor() {
                this.padding = 2
                this.birdSpeed = 6;
            }

            // drawing stripe with the background image
            displayBackground = () => {
                displaySprite(bgSprite, 0, 0);
            }

            //rendering the bottom graphics on our canvas
            displayFloor = () => {
                // animate floor
                floorSprite.x = 292 + (time * SPEED % 14);
                displaySprite(floorSprite, 0, 400);
            }


            //rending pipes into our playing area
            displayPipes = () => {
                for (var i = 0; i < pipes.length; ++i) {
                    if (pipes[i].y === 0) {
                        displaySprite(topPipeSprite, pipes[i].x, pipes[i].h - topPipeSprite.h);
                    } else {
                        displaySprite(bottomPipeSprite, pipes[i].x, pipes[i].y);
                    }
                }
            }


            //displaying scores on top of out playground
            displayScore = () => {
                let numbers = score.toString(10).split("").map(Number);
                let scale = numSprite[0].scale;
                let width = numSprite[0].w;
                let offset = W / 2; // center of canvas
                offset -= numbers.length * width / 2 * scale; // left to center numbers
                offset -= this.padding * (numbers.length - 1); // left to adjust for padding
                for (var i = 0; i < numbers.length; ++i) {
                    displaySprite(numSprite[numbers[i]], offset + i * width * scale + i * this.padding * 2, 50);
                }
            }

            //displaying flappy bird
            displayBird = () => {
                // iterating through sprites (flap animation)
                let birdState = Math.floor((time % (4 * this.birdSpeed)) / this.birdSpeed);
                ctx.save();
                ctx.translate(bird.x + birdSprite[0].w / 2, bird.y + birdSprite[0].h / 2);
                ctx.rotate(-bird.dy * 5 * (Math.PI / 180));
                displaySprite(birdSprite[birdState], -birdSprite[0].w / 2, -birdSprite[0].h / 2);
                ctx.restore();
            }

            //displaying game over
            displayGameOver = () => {
                let sprite = { x: 292, y: 397, w: 188, h: 39 };
                displaySprite(sprite, 50, 200);
            }

            // sprites



        }

        // sprite
        //Sprite for our playground background
        bgSprite = {
            x: 0,
            y: 0,
            w: 288,
            h: 512,
            scale: 1
        }


        //Sprite for our Floor
        floorSprite = {
            x: 292,
            y: 0,
            w: 288,
            h: 112,
            scale: 1
        }


        //Bird Sprite
        birdSprite = [
            { x: 528, y: 128, w: 34, h: 25, scale: 1 },
            { x: 528, y: 180, w: 34, h: 25, scale: 1 },
            { x: 446, y: 248, w: 34, h: 25, scale: 1 },
            { x: 528, y: 180, w: 34, h: 25, scale: 1 }
        ]

        //Bottom Pipe Sprite
        bottomPipeSprite = {
            x: 660,
            y: 0,
            w: 52,
            h: 270,
            scale: 1
        }

        //Top Pipe Sprite
        topPipeSprite = {
            x: 604,
            y: 0,
            w: 52,
            h: 270,
            scale: 1
        }

        //Score updating Num Sprite
        numSprite = [{ x: 576, y: 200, w: 14, h: 20, scale: 1.5 },
            { x: 580, y: 236, w: 14, h: 20, scale: 1.5 },
            { x: 578, y: 268, w: 14, h: 20, scale: 1.5 },
            { x: 578, y: 300, w: 14, h: 20, scale: 1.5 },
            { x: 574, y: 346, w: 14, h: 20, scale: 1.5 },
            { x: 574, y: 370, w: 14, h: 20, scale: 1.5 },
            { x: 330, y: 490, w: 14, h: 20, scale: 1.5 },
            { x: 350, y: 490, w: 14, h: 20, scale: 1.5 },
            { x: 370, y: 490, w: 14, h: 20, scale: 1.5 },
            { x: 390, y: 490, w: 14, h: 20, scale: 1.5 }
        ]

        // utils
        //drawing sprite images on our playground
        function displaySprite(sprite, x, y) {
            ctx.drawImage(sprites, sprite.x, sprite.y, sprite.w, sprite.h,
                x, y, sprite.scale * sprite.w, sprite.scale * sprite.h);
        }


        //function detecting whether the bird strike on any of the two pipe of ground
        function detectStrike(box1, box2) {
            return box1.x < box2.x + box2.w &&
                box1.x + box1.w > box2.x &&
                box1.y < box2.y + box2.h &&
                box1.y + box1.h > box2.y;
        }

        // controller
        let bird;
        let pipes = [];
        let flapping;
        let time;
        let score;


        //Not Displaying the Gates that were out of our player ground
        function hideUndisplayPipes() {
            s = displayPipes.length;
            pipes = displayPipes.filter(function(item) {
                return item.x + item.w >= 0;
            });
        }


        //function where we initiating the bird position and definning its assets
        function init() {
            bird = {
                x: W / 2 - BIRD_WIDTH / 2,
                y: H / 2 - BIRD_HEIGHT / 2,
                w: BIRD_WIDTH,
                h: BIRD_HEIGHT,
                dy: 0
            };
            flapping = true;
            time = 0;
            score = 0;
            displayPipes = [];
        }


        //Capturing the each step of player playing the flappy bird
        function step() {
            if (flapping && flappyCanvas.style.display == 'block') {

                for (var i = 0; i < displayPipes.length; ++i) {
                    displayPipes[i].x -= SPEED;
                }
                hideUndisplayPipes();
                if (time % PIPE_SPACING == 0) {
                    spawnGate();
                }

                bird.dy += GRAVITY;
                newBird = { x: bird.x, y: bird.y - bird.dy, w: bird.w, h: bird.h }

                // collisions
                for (var i = 0; i < displayPipes.length; ++i) {
                    if (detectStrike(newBird, displayPipes[i])) {
                        flapping = false;
                        hideUnhideDom();
                        main();
                        break;
                    }
                }
                if (newBird.y + bird.h >= H) {
                    flapping = false;
                    hideUnhideDom()
                    main();
                }
                if (flapping) {
                    bird.y = newBird.y;
                    if (newBird.y < 0) {
                        bird.y = 0;
                        bird.dy = 0;
                    }
                }

                // score and time
                if (time > 0 && time % PIPE_SPACING == 0) {
                    score += 1;
                    localStorage.setItem('highest-score', score);
                    if (score > localStorage.getItem('highest-score', score)) {
                        localStorage.setItem('highest-score', score);
                    }
                }
                time += 1;
            }
            setTimeout(step, 20);
        }

        init();
        step();


        //function to perform dom manipulation
        function hideUnhideDom() {
            afterCrash.style.display = 'block';
            document.getElementById('score').innerHTML = score;
            document.getElementById('high-score').innerHTML = localStorage.getItem('highest-score');

        }


        //Getting the pipes of differest sizes
        function spawnGate() {
            gateUp = Math.floor(Math.random() * (H - TWO_PIPE_HEIGHT_DIFF) + TWO_PIPE_HEIGHT_DIFF / 2)
            gateUp = Math.max(TWO_PIPE_HEIGHT_DIFF, gateUp);
            gateUp = Math.min(H - TWO_PIPE_HEIGHT_DIFF, gateUp);
            displayPipes.push({ x: W, y: 0, w: PIPE_WIDTH, h: gateUp - TWO_PIPE_HEIGHT_DIFF / 2 });
            displayPipes.push({ x: W, y: gateUp + TWO_PIPE_HEIGHT_DIFF / 2, w: PIPE_WIDTH, h: H - gateUp - TWO_PIPE_HEIGHT_DIFF / 2 });
        }

        //Controller that is used to start the game and control the flappy
        flappyBird.onclick = function(e) {

            flappyCanvas.style.display = 'block';
            beforeStart.style.display = 'none';



            if (e.keyCode === 82) {
                if (!flapping) {
                    GRAVITY = -0.5;
                    init();
                }
            }
        };


        flappyBird.onclick = function(e) {
            flappyCanvas.style.display = 'block';
            beforeStart.style.display = 'none';
            if (flapping) {
                bird.dy = FLAPPING;
            } else {
                afterCrash.style.display = 'none';
                init();
            }
        }



        // index
        let canvas = document.getElementById('canvas');
        // let sprites = document.getElementById('sprites');
        let ctx = canvas.getContext('2d');
        canvas.height = CANVAS_HEIGHT;
        canvas.width = CANVAS_WIDTH;
        ctx.imageSmoothingEnabled = false;


        //Actual function rending all the Playground Stuffs.
        function main() {
            ctx.clearRect(0, 0, W, H);
            p1 = new PlayGround()
            p1.displayBackground();
            p1.displayFloor();
            p1.displayBird();
            p1.displayPipes();
            p1.displayScore();
            setTimeout(main, 20);
        }

        main();
    };


    // Target Game
    icon42.addEventListener('click', targetGameApp);

    function targetGameApp() {
        icons.style.display = 'none';

        var targetGame = document.createElement('div');
        targetGame.className = 'target-game';
        targetGame.style.width = '260px';
        targetGame.style.height = '400px';
        targetGame.style.position = 'absolute';
        targetGame.style.left = '0px';
        targetGame.style.background = 'white';
        targetGame.style.textAlign = 'center';
        targetGame.style.color = 'black';
        targetGame.innerHTML = '<p>Click anywhere above the red line<p>';
        homescreen.appendChild(targetGame);

        var drop = document.createElement('div');
        drop.setAttribute('id', 'drop');
        targetGame.appendChild(drop);

        var line = document.createElement('div');
        line.setAttribute('id', 'line');
        targetGame.appendChild(line);

        var target = document.createElement('div');
        target.setAttribute('id', 'target');
        targetGame.appendChild(target);


        let start = false;
        line.addEventListener("click", function(e) {
            if (!start) {
                start = true;
                drop.style.display = "block";
                drop.style.width = "20px";
                drop.style.height = "20px";
                drop.style.background = "blue";
                drop.style.position = "absolute";

                drop.style.left = e.offsetX + "px";

                const tar_left = Math.round(window.scrollX + target.getBoundingClientRect().left);
                const drop_left = Math.round(window.scrollX + drop.getBoundingClientRect().left);
                console.log("Drop: ", drop_left);
                let id = null;
                let pos = 0;

                clearInterval(id);
                id = setInterval(frame, 5);


                function frame() {
                    if (pos == 380) {
                        clearInterval(id);
                    } else {
                        pos++;
                        drop.style.top = pos + "px";
                    }
                }

                if (drop_left === tar_left) {
                    // clearInterval(id1);
                    var won = document.createElement('div');
                    targetGame.appendChild(won);
                    won.style.height = '100px';
                    setTimeout(function() {
                        // alert("Target Matched!");
                        won.innerHTML = '<h3>Target Matched</h3>';
                        start = false;
                    }, 2000);
                } else {
                    setTimeout(function() {
                        start = false;
                        target.style.right = Math.floor(Math.random() * (240 + 1)) + "px";
                    }, 2300);
                }


            }


        });

    };

    // Breakout Game
    icon43.addEventListener('click', breakoutGame);

    function breakoutGame() {
        icons.style.display = 'none';

        var breakout = document.createElement('div');
        breakout.className = 'breakout';
        breakout.style.width = '260px';
        breakout.style.height = '400px';
        breakout.style.position = 'absolute';
        breakout.style.left = '0px';
        breakout.style.background = 'black';
        breakout.style.display = 'flex';
        breakout.style.alignItems = 'center';
        breakout.style.justifyContent = 'center';
        homescreen.appendChild(breakout);

        var breakoutCanvas = document.createElement('canvas');
        breakoutCanvas.style.width = '260px';
        breakoutCanvas.style.height = '400px';
        breakoutCanvas.id = 'game';
        breakout.appendChild(breakoutCanvas);

        const context = breakoutCanvas.getContext('2d');

        // each row is 14 bricks long. the level consists of 6 blank rows then 8 rows
        // of 4 colors: red, orange, green, and yellow
        const level1 = [
            ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
            ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']
        ];

        // create a mapping between color short code (R, O, G, Y) and color name
        const colorMap = {
            'R': 'red',
            'O': 'orange',
            'G': 'green',
            'Y': 'yellow'
        };

        // use a 2px gap between each brick
        const brickGap = 3;
        const brickWidth = 15;
        const brickHeight = 5;

        // the wall width takes up the remaining space of the canvas width. with 14 bricks
        // and 13 2px gaps between them, thats: 400 - (14 * 25 + 2 * 13) = 24px. so each
        // wall will be 12px
        const wallSize = 0;
        const bricks = [];

        // create the level by looping over each row and column in the level1 array
        // and creating an object with the bricks position (x, y) and color
        for (let row = 0; row < level1.length; row++) {
            for (let col = 0; col < level1[row].length; col++) {
                const colorCode = level1[row][col];

                bricks.push({
                    x: wallSize + (brickWidth + brickGap) * col,
                    y: wallSize + (brickHeight + brickGap) * row,
                    color: colorMap[colorCode],
                    width: brickWidth,
                    height: brickHeight
                });
            }
        }

        const paddle = {
            // place the paddle horizontally in the middle of the screen
            x: breakoutCanvas.width / 2 - brickWidth / 2,
            y: 100,
            width: (brickWidth + 20),
            height: brickHeight,

            // paddle x velocity
            dx: 0
        };

        const ball = {
            x: 100,
            y: 40,
            width: 10,
            height: 5,

            // how fast the ball should go in either the x or y direction
            speed: 0.9,

            // ball velocity
            dx: 0,
            dy: 0
        };

        // check for collision between two objects using axis-aligned bounding box (AABB)
        // @see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        function collides(obj1, obj2) {
            return obj1.x < obj2.x + obj2.width &&
                obj1.x + obj1.width > obj2.x &&
                obj1.y < obj2.y + obj2.height &&
                obj1.y + obj1.height > obj2.y;
        }

        // game loop
        function loop() {
            requestAnimationFrame(loop);
            context.clearRect(0, 0, breakoutCanvas.width, breakoutCanvas.height);

            // move paddle by it's velocity
            paddle.x += paddle.dx;

            // prevent paddle from going through walls
            if (paddle.x < wallSize) {
                paddle.x = wallSize
            } else if (paddle.x + brickWidth > breakoutCanvas.width - wallSize) {
                paddle.x = breakoutCanvas.width - wallSize - brickWidth;
            }

            // move ball by it's velocity
            ball.x += ball.dx;
            ball.y += ball.dy;

            // prevent ball from going through walls by changing its velocity
            // left & right walls
            if (ball.x < wallSize) {
                ball.x = wallSize;
                ball.dx *= -1;
            } else if (ball.x + ball.width > breakoutCanvas.width - wallSize) {
                ball.x = breakoutCanvas.width - wallSize - ball.width;
                ball.dx *= -1;
            }
            // top wall
            if (ball.y < wallSize) {
                ball.y = wallSize;
                ball.dy *= -1;
            }

            // reset ball if it goes below the screen
            if (ball.y > breakoutCanvas.height) {
                ball.x = 100;
                ball.y = 40;
                ball.dx = 0;
                ball.dy = 0;
            }

            // check to see if ball collides with paddle. if they do change y velocity
            if (collides(ball, paddle)) {
                ball.dy *= -1;

                // move ball above the paddle otherwise the collision will happen again
                // in the next frame
                ball.y = paddle.y - ball.height;
            }

            // check to see if ball collides with a brick. if it does, remove the brick
            // and change the ball velocity based on the side the brick was hit on
            for (let i = 0; i < bricks.length; i++) {
                const brick = bricks[i];

                if (collides(ball, brick)) {
                    // remove brick from the bricks array
                    bricks.splice(i, 1);

                    // ball is above or below the brick, change y velocity
                    // account for the balls speed since it will be inside the brick when it
                    // collides
                    if (ball.y + ball.height - ball.speed <= brick.y ||
                        ball.y >= brick.y + brick.height - ball.speed) {
                        ball.dy *= -1;
                    }
                    // ball is on either side of the brick, change x velocity
                    else {
                        ball.dx *= -1;
                    }

                    break;
                }
            }

            // draw walls
            context.fillStyle = 'lightgrey';
            context.fillRect(0, 0, breakoutCanvas.width, wallSize);
            context.fillRect(0, 0, wallSize, breakoutCanvas.height);
            context.fillRect(breakoutCanvas.width - wallSize, 0, wallSize, breakoutCanvas.height);

            // draw ball if it's moving
            if (ball.dx || ball.dy) {
                context.fillRect(ball.x, ball.y, ball.width, ball.height);
            }

            // draw bricks
            bricks.forEach(function(brick) {
                context.fillStyle = brick.color;
                context.fillRect(brick.x, brick.y, brick.width, brick.height);
            });

            // draw paddle
            context.fillStyle = 'cyan';
            context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
        }

        // listen to keyboard events to move the paddle
        document.addEventListener('keydown', function(e) {
            // left arrow key
            if (e.which === 37) {
                paddle.dx = -3;
            }
            // right arrow key
            else if (e.which === 39) {
                paddle.dx = 3;
            }

            // space key
            // if they ball is not moving, we can launch the ball using the space key. ball
            // will move towards the bottom right to start
            if (ball.dx === 0 && ball.dy === 0 && e.which === 32) {
                ball.dx = ball.speed;
                ball.dy = ball.speed;
            }
        });

        // listen to keyboard events to stop the paddle if key is released
        document.addEventListener('keyup', function(e) {
            if (e.which === 37 || e.which === 39) {
                paddle.dx = 0;
            }
        });

        // start the game
        requestAnimationFrame(loop);


    };

}