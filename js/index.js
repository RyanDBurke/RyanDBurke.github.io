var photos = [
        "./img/IMG1.png",
        "./img/IMG2.png",
        "./img/IMG3.png",
        "./img/IMG4.png",
        "./img/IMG5.png",
        "./img/IMG6.png",
        "./img/IMG2.png",
        "./img/IMG3.png",
        "./img/IMG4.png",
        "./img/IMG5.png",
    ];
var photosPreview = [
        "./preview/IMG1.png",
        "./preview/IMG2.png",
        "./preview/IMG3.png",
        "./preview/IMG4.png",
        "./preview/IMG5.png",
        "./preview/IMG6.png",
        "./preview/IMG2.png",
        "./preview/IMG3.png",
        "./preview/IMG4.png",
        "./preview/IMG5.png"
    ];
var previewIds = [
        document.getElementById("PREVIEW-1"),
        document.getElementById("PREVIEW-2"),
        document.getElementById("PREVIEW-3"),
        document.getElementById("PREVIEW-4"),
        document.getElementById("PREVIEW-5"),
        document.getElementById("PREVIEW-6"),
        document.getElementById("PREVIEW-7"),
        document.getElementById("PREVIEW-8"),
        document.getElementById("PREVIEW-9"),
        document.getElementById("PREVIEW-10")
    ];
var imgPreviewIds = [
    document.getElementById("IMG-PREVIEW-1"),
    document.getElementById("IMG-PREVIEW-2"),
    document.getElementById("IMG-PREVIEW-3"),
    document.getElementById("IMG-PREVIEW-4"),
    document.getElementById("IMG-PREVIEW-5"),
    document.getElementById("IMG-PREVIEW-6"),
    document.getElementById("IMG-PREVIEW-7"),
    document.getElementById("IMG-PREVIEW-8"),
    document.getElementById("IMG-PREVIEW-9"),
    document.getElementById("IMG-PREVIEW-10")
];

var photosIdx = 0;
var maxIdx = photos.length - 1;

// UPDATES PAGE
function update() {

    //  set opacity for ever preview box to 75%
    previewIds.forEach(element => {
        element.style.opacity = "0.30"
    });

    // set current selected preview box to 100%
    previewIds[photosIdx].style.opacity = "1"

    // set current main photo
    document.getElementById("CURRENT-PHOTO").src = photos[photosIdx];
}

function HOME() {
    window.open("index.html", "_self")
}

// fades in pic and short bio
function PHOTOS() {
    window.open("photos.html", "_self")
}

function CODE() {
    window.open("https://github.com/RyanDBurke")
}

function SETUP() {

    // set about width
    if (document.documentElement.clientWidth > 1000) {
        document.getElementById("about-desc").className = "col-6 text-center text-white";
    } else {
        document.getElementById("about-desc").className = "col text-center text-white";
    }

    // set photos index, just in case then update
    photosIdx = 0;

    // init all preview photos
    for (var i = 0; i < imgPreviewIds.length; i++) {
        document.getElementById(`IMG-PREVIEW-${i+1}`).src = photosPreview[i];
    }

    //  set opacity for ever preview box to 75%
    update();
}

function SET_IMAGE(imgNumber) {
    photosIdx = imgNumber - 1;
    update();
}


// READ ARROW KEYS AND UPDATE
document.onkeydown = function(e) {
    if (e.code == 'ArrowRight') {
        photoIdx = (photosIdx + 1 <= maxIdx) ? photosIdx++ : photosIdx;
    }

    if (e.code == 'ArrowLeft') {
        photoIdx = (photosIdx - 1 >= 0) ? photosIdx-- : photosIdx;
    }

    update();
};

