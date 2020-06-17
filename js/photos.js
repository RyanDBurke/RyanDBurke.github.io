var body = document.body;
var modalState = "closed";
var photoSources = ['./images/JPG/home', './images/JPG/monument',
    './images/JPG/dawn', './images/JPG/shadow',
    './images/JPG/boyAndBoats', './images/JPG/dusk',
    './images/JPG/crabs', './images/JPG/fall',
    './images/JPG/stLucia', './images/JPG/cherry blossom',
    './images/JPG/santaMonica', 'images/JPG/cherry-blossom2',
    './images/JPG/grad', './images/JPG/sunset',
    './images/JPG/boat2', './images/JPG/helicopter',
    './images/JPG/LA', './images/JPG/shadow2',
    './images/JPG/moon', './images/JPG/lobster',
    './images/JPG/rain', './images/JPG/beige'];
var currentImg = 0;
var scrollYReturn = 0;

function openModal(index) {

    // set current image
    currentImg = index;

    // set current caption
    currentCaption = index;

    // src for photo
    src = photoSources[index];

    // IDs
    var containerID = document.getElementById("container");
    var modalID = document.getElementById("modal");
    var setModalImage = document.getElementById("modalImage");
    var prevID = document.getElementById("prev");
    var nextID = document.getElementById("next");
    var width = window.screen.width * window.devicePixelRatio;

    /* Set modal image src */
    setModalImage.src = src + '.jpg';

    // always do this
    containerID.style.opacity = 0.2;
    modalID.style.display = "block";
    prevID.style.display = "block";
    nextID.style.display = "block";
    prevID.style.opacity = 1.0;
    nextID.style.opacity = 1.0;

    /* scroll to top */
    scrollYReturn = window.scrollY; // keep track of where we were
    window.scrollTo(0, 0);

    // change modal state
    modalState = "open";
}


// close modal
function modalClose() {

    // IDs
    var containerID = document.getElementById("container");
    var modalID = document.getElementById("modal");
    var prevID = document.getElementById("prev");
    var nextID = document.getElementById("next");

    // closing modal
    containerID.style.opacity = 1.0;
    modalID.style.display = "none";
    prevID.style.display = "none";
    nextID.style.display = "none";

    // return to scrollY before modal was opened
    window.scrollTo(0, scrollYReturn);

    // changed modal state
    modalState = "closed";
}

// move to next photo
function nextPhoto() {
    next = currentImg + 1;

    if (next >= photoSources.length) {
        next = 0;
    }

    currentImg = next;
    openModal(currentImg);
}


// move to previous photo
function prevPhoto() {
    prev = currentImg - 1;

    if (prev < 0) {
        prev = photoSources.length - 1;
    }

    currentImg = prev;
    openModal(currentImg);
}

// if viewing for mobile, deny request.
function ifMobile() {
    var width = window.screen.width * window.devicePixelRatio;

    if (width < 1920) {
        window.location.href = "./index.html";
        alert("pics page not available for mobile.");
    }
}

// display time on hover
function imageHover(ID) {

    // IDs
    var imageID = document.getElementById(ID);
    var textID = document.getElementById(ID + 'Text');

    imageID.style.opacity = 0.3;
    textID.style.display = "block";
    textID.style.opacity = 1.0;
}

// reset hover
function resetHover(ID) {

    // IDs
    var imageID = document.getElementById(ID);
    var textID = document.getElementById(ID + 'Text');

    imageID.style.opacity = 1.0;
    textID.style.display = "none";
}

// allow arrows to navigate photos
document.addEventListener('keydown', function (event) {

    if (modalState == "open") {
        if (event.keyCode == 37) {
            prevPhoto();
        }
        else if (event.keyCode == 39) {
            nextPhoto();
        }
    }
});

// to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var topID = document.getElementById("toTop");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topID.style.display = "block";
    } else {
        topID.style.display = "none";
    }
}

// scroll to top
function scrollToTop() {
    window.scrollTo(0, 0);
}
