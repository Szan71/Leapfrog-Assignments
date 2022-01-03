function cameraInterface() {
    var front = false;
    var video = document.querySelector('video');
    var constraints = { video: { facingMode: (front ? "user" : "environment"), width: 260, height: 400 } };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(mediaStream) {
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch(function(err) { console.log(err.name + ": " + err.message); })
}